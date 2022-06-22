import express from 'express';
const writefile = express.Router()

writefile.post('', (request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.status(200).json({
        status: 1,
        message: 'write'
    })
})

export default writefile;