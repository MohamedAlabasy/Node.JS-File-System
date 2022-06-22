import express from 'express';
import 'dotenv/config'


import logger from './utilities/logger';
const app = express();
const PORT = 8000;

// #=======================================================================================#
// #			                          run server                                       #
// #=======================================================================================#
app.listen(process.env.PORT || PORT, () => {
    console.log(`App Run at http://${process.env.HOST}:${process.env.PORT || PORT}`);
});
// #=======================================================================================#
// #			                            router                                         #
// #=======================================================================================#
// #=======================================================================================#
// #			                        not Found middleware                               #
// #=======================================================================================#
app.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.status(404).json({
        status: 0,
        message: 'Not Found'
    })
})

// #=======================================================================================#
// #			                      error middleware                                     #
// #=======================================================================================#
app.use((error: any, request: express.Request, response: express.Response, next: express.NextFunction) => {
    let status = error.status || 500;
    response.status(status).json({
        status: 0,
        error: error.message + ''
    })
})