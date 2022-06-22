import express from 'express';
const logger = express();

logger.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
    console.log(request.method, request.url);
    next()
})

export default logger