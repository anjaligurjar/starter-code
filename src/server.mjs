import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import { apiRoutes } from './api/api.routes.mjs';

const app = express();

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/test-db');

app.use(apiRoutes.path, apiRoutes.router);


app.listen(3000, () => {
	console.info('Server is listening on 3000');
})