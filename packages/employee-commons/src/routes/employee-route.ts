import Router from 'express';
import { getEmployeeList } from '@portal-cms-backend/employee-commons';

export const employeeRoute = Router();

//get list of employees
employeeRoute.get('/', async (req, res) => {
  const employeeList = await getEmployeeList();
  res.status(200).json(employeeList);
});
