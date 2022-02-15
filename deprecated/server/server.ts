require('dotenv').config();
import compression = require('compression');
import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import {rootRouter} from './src/routes';
const morgan = require('morgan');

const app = express();
const port = 49200;

app.use(compression());
app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  })
);
app.use(express.static('uploads'));
app.use(morgan('dev'));
app.use('/v1', rootRouter);

app.listen(port, () => {
  console.log(`MSMF API listening on ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
