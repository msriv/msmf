import {Request, Response} from 'express';
import express = require('express');
import {createIncubatee, getIncubatees} from '../providers/incubatee.provider';
import {uploadIncubation} from '../services/fileio';
const incubationRouter = express.Router();

incubationRouter.get(
  '/incubatees',
  async (req: Request, res: Response) => await getIncubatees(req, res)
);

incubationRouter.post(
  '/incubatees',
  uploadIncubation.fields([
    {
      name: 'pitchDeck',
      maxCount: 1,
    },
    {
      name: 'logo',
      maxCount: 1,
    },
  ]),
  async (req: Request, res: Response) => await createIncubatee(req, res)
);

export {incubationRouter};
