import {Request, Response} from 'express';
import express = require('express');
import {createAssets, fetchAssets} from '../providers/assets.provider';
import {uploadAssets} from '../services/fileio';
const assetsRouter = express.Router();

assetsRouter.get(
  '',
  async (req: Request, res: Response) => await fetchAssets(req, res)
);

assetsRouter.post(
  '/upload',
  uploadAssets.array('assets'),
  async (req: Request, res: Response) => await createAssets(req, res)
);

export {assetsRouter};
