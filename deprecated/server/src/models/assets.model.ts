import {DataTypes, dbConnection} from '../services/db';

const AssetsModel = () => {
  const {STRING} = DataTypes;
  const asset = dbConnection.define('Asset', {
    fileName: {type: STRING, allowNull: false},
    originalName: {type: STRING, allowNull: false},
    mimeType: {type: STRING, allowNull: false},
    path: {type: STRING, allowNull: false},
    uri: {type: STRING, allowNull: false},
  });
  asset.sync();
  return asset;
};

export {AssetsModel};
