import multer = require('multer');
import fs = require('fs');
import mime = require('mime');

const storageAssets = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = 'uploads/assets/';
    fs.mkdirSync(path, {recursive: true});
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}.${mime.extension(file.mimetype)}`);
  },
});

const incubationStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = 'uploads/incubation/';
    fs.mkdirSync(path, {recursive: true});
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}.${mime.extension(file.mimetype)}`);
  },
});

const uploadAssets = multer({storage: storageAssets});
const uploadIncubation = multer({storage: incubationStorage});

export {uploadAssets, uploadIncubation};
