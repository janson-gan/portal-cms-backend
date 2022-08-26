import express, { Router } from 'express';
import { employeeRoute } from '@portal-cms-backend/employee-commons';
import {initDB} from '../../../packages/employee-commons/src/database-config/db-connection'

initDB();

const app = express();

const apiV1Route = Router();

app.use('/api/v1', apiV1Route);

apiV1Route.use('/admin', employeeRoute);

export default app;
