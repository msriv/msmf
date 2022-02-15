import {Request, Response} from 'express';
import {config} from '../config';
import {AssetsModel} from '../models/assets.model';

const createAssets = async (req: Request, res: Response) => {
  try {
    const assets = await AssetsModel().bulkCreate(
      (req.files as Array<Express.Multer.File>).map(file => ({
        fileName: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        path: file.path,
        uri: `${config.server}/assets/${file.filename}`,
      }))
    );
    res.status(200).json(assets);
  } catch (error) {
    console.error(error);
    res.json({error});
  }
};

const fetchAssets = async (req: Request, res: Response) => {
  try {
    const assets = await AssetsModel().findAll();
    res.status(200).json(assets);
  } catch (error) {
    console.error(error);
    res.json({error});
  }
};

export {createAssets, fetchAssets};
