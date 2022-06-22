import express from 'express';
const readfile = express.Router()

readfile.get('', (request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.send('readfile');
})

export default readfile;