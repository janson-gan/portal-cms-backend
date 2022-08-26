import express, { Router } from 'express';
import { initDB, employeeRoute } from '@portal-cms-backend/employee-commons';

initDB();

const app = express();

const apiV1Route = Router();

app.use('/api/v1', apiV1Route);

apiV1Route.use('/admin', employeeRoute);

export default app;
