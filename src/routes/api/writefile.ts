import express from 'express';

import { promises as fsPromises } from 'fs';
const writefile = express.Router()

writefile.post('', (request: express.Request, response: express.Response, next: express.NextFunction) => {
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