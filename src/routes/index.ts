import express from 'express';
import writefile from './api/writefile';
import readfile from './api/readfile';

const routes = express.Router()

routes.use('/write', writefile)
routes.use('/read', readfile)

export default routes