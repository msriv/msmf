import express = require('express');
const rootRouter = express.Router();
import {facilitiesRouter} from './controllers/facilities.controller';
import {authRouter} from './controllers/authentication.controller';
import {assetsRouter} from './controllers/assets.controller';
import {incubationRouter} from './controllers/incubatee.controller';

rootRouter.use('/facilities', facilitiesRouter);
rootRouter.use('/auth', authRouter);
rootRouter.use('/assets', assetsRouter);
rootRouter.use('/incubation', incubationRouter);

export {rootRouter};
