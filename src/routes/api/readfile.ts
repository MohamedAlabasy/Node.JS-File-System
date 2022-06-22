import express from 'express';
const readfile = express.Router()

readfile.get('', (request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.status(200).json({
        status: 1,
        message: 'read'
    })
})

export default readfile;