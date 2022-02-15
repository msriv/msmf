import {Request, Response} from 'express';
import express = require('express');
import {
  generateToken,
  validateToken,
} from '../providers/authentication.provider';
const authRouter = express.Router();

authRouter.post(
  '/token',
  async (req: Request, res: Response) => await generateToken(req, res)
);

authRouter.get(
  '/validate',
  async (req: Request, res: Response) => await validateToken(req, res)
);

export {authRouter};
