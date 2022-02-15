import {Request, Response} from 'express';
import {FacilitiesModel} from '../models/facilities.model';

const getAllFacilities = async (req: Request, res: Response) => {
  try {
    const facilities = await FacilitiesModel().findAll();
    res.status(200).json(facilities);
  } catch (error) {
    console.error(error);
    res.json({error});
  }
};

const createFacility = async (req: Request, res: Response) => {
  try {
    const facilities = await FacilitiesModel().create(req.body);
    res.status(200).json(facilities);
  } catch (error) {
    console.error(error);
    res.json({error});
  }
};

export {getAllFacilities, createFacility};
