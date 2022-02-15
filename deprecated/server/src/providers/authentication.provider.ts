import {Request, Response} from 'express';
import {ITokenReqBody} from '../models/authentication.model';
import fs = require('fs');
import jwt = require('jsonwebtoken');

const privateKey = fs.readFileSync('./utils/id_rsa', 'utf-8');

const generateToken = async (req: Request, res: Response) => {
  try {
    const reqBody: ITokenReqBody = req.body;

    const token = jwt.sign(reqBody, privateKey, {algorithm: 'RS256'});
    res.status(200).json({token});
  } catch (error) {
    console.error(error);
    res.json({error});
  }
};

const validateToken = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      jwt.verify(
        token,
        privateKey,
        {algorithms: ['RS256']},
        (error, decoded) => {
          if (error) res.json({error});
          if (decoded) res.status(200).json({ok: true});
        }
      );
    }
  } catch (error) {
    console.error(error);
    res.json({error});
  }
};

export {generateToken, validateToken};
