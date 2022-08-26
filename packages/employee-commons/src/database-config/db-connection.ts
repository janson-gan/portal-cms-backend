import { Sequelize } from 'sequelize-typescript';
import Employee from '../models/employees';

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME as string,
  username: process.env.DATABASE_USERNAME as string,
  password: process.env.DATABASE_PASSWORD as string,
  dialect: "postgres",
});

sequelize.addModels([Employee]);

export const initDB = async (): Promise<void> => {
  try {
    sequelize.authenticate();
    console.log('Connected to database successfully');
  } catch (error) {
    console.error('Error authenticating', error);
  }
};
