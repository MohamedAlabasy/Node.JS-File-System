import { Request, Response, NextFunction, Router } from 'express';
import { promises as fsPromises } from 'fs';

const readfile = Router()

readfile.get('', (request: Request, response: Response, next: NextFunction) => {
    fileRead()
        .then(data => {
            response.status(200).json({
                status: 1,
                data: data
            })
        }).catch(error => {
            next(error);
        })
})

async function fileRead() {
    return await fsPromises.readFile('src/files/myFile.txt', 'utf-8')
}

export default readfile;