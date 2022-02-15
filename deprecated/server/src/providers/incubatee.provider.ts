import {Request, Response} from 'express';
import {config} from '../config';
import {IncubationModel} from '../models/incubatee.model';

const getIncubatees = async (req: Request, res: Response) => {
  try {
    const incubatees = await IncubationModel().findAll();
    res.status(200).json(incubatees);
  } catch (error) {
    console.error(error);
    res.json({error});
  }
};

const createIncubatee = async (req: Request, res: Response) => {
  if (typeof req.files !== undefined) {
    const incubatee = {
      ...req.body,
      pitchDeck: `${config.server}/incubation/${
        (req.files as any)['pitchDeck'][0].filename
      }`,
      logo: `${config.server}/incubation/${
        (req.files as any)['logo'][0].filename
      }`,
    };

    try {
      const response = await IncubationModel().create(incubatee);
      res.status(201).json(response);
    } catch (error) {
      console.error(error);
      res.json({error});
    }
  } else {
    res.status(400).json({message: 'PitchDeck and Logo cannot be empty.'});
  }
};

export {getIncubatees, createIncubatee};
