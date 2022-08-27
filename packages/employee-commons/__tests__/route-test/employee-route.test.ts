import request from 'supertest';
import express from 'express';
import { employeeRoute } from '@portal-cms-backend/employee-commons';
import * as EmployeeServices from '../../../employee-commons/src/services/employee-service';
import Employee from '../../../../packages/employee-commons/src/models/employees';

const app = express();
app.use(employeeRoute);

const mockData = {
  id: '1',
  title: 'test',
  description: 'test',
  technologies: 'test',
  budget: 'test',
  contact_email: 'test',
};

describe('employee routes', () => {
  it('GET / should return 200 status code when getting employees list', async () => {
    jest
      .spyOn(EmployeeServices, 'getEmployeeList')
      .mockResolvedValue(mockData as any);
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
  });

  it('GET / should return the same list of data', async () => {
    jest
      .spyOn(EmployeeServices, 'getEmployeeList')
      .mockResolvedValue(mockData as any);
    const response = await request(app).get('/');
    expect(response.body).toEqual(mockData);
  });
});
