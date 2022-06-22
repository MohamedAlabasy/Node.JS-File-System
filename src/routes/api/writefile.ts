import { Request, Response, NextFunction, Router } from 'express';

import { promises as fsPromises } from 'fs';
const writefile = Router()

writefile.post('', (request: Request, response: Response, next: NextFunction) => {
    fileWrite(request.body.data)
    response.status(200).json({
        status: 1,
        message: 'file write successfully',
    })
})

async function fileWrite(data: string) {
    const writeFile = await fsPromises.open('src/files/myFile.txt', 'a+');
    await writeFile.write(`\n${data}`);
    writeFile.close();
}

export default writefile;