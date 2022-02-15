import {Sequelize, DataTypes} from 'sequelize';
import {config} from '../config';

const dbConnection = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    dialect: 'mariadb',
    host: config.db.host,
    port: 3306,
    logging: true,
  }
);

const checkDBConnection = async () => {
  try {
    await dbConnection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export {Sequelize, DataTypes, dbConnection, checkDBConnection};
