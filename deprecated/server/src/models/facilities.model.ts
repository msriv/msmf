import {DataTypes, dbConnection} from '../services/db';

const FacilitiesModel = () => {
  const {STRING} = DataTypes;
  const facility = dbConnection.define('Facility', {
    particulars: {type: STRING, allowNull: false},
    category: {type: STRING, allowNull: false},
    charges: {type: STRING, allowNull: false},
    duration: {type: STRING, allowNull: false},
    remarks: {type: STRING, allowNull: false},
    image: {type: STRING, allowNull: true},
  });
  facility.sync();
  return facility;
};

export {FacilitiesModel};
