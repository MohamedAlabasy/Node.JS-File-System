import express from 'express';
const writefile = express.Router()

writefile.get('', (request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.send('write');
})

export default writefile;