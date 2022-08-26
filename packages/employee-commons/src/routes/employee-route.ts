import Router from 'express';
import { getEmployeeList } from '../services/employee-service';

export const employeeRoute = Router();

employeeRoute.get('/employeeList', async (req, res) => {
  const employeeList = await getEmployeeList();
  res.status(200).json({employeeList})
});