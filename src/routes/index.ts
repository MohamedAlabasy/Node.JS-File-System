import express from 'express';
import writefile from './api/writefile';

const routes = express.Router()

routes.use('/write', writefile)

export default routes