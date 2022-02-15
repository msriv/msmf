import {Request, Response} from 'express';
import {
  createFacility,
  getAllFacilities,
} from '../providers/facilities.provider';

import express = require('express');
const facilitiesRouter = express.Router();

facilitiesRouter.get(
  '',
  async (req: Request, res: Response) => await getAllFacilities(req, res)
);
facilitiesRouter.post(
  '',
  async (req: Request, res: Response) => await createFacility(req, res)
);

export {facilitiesRouter};
