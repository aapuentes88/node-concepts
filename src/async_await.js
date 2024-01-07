import { promisify } from 'util'
import { readFile, writeFile } from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFilePromise = promisify(readFile)
const writeFilePromise = promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise(`${__dirname}/content/first.txt`, 'utf8')
        const second = await readFilePromise(`${__dirname}/content/second.txt`, 'utf8')
        await writeFilePromise(`${__dirname}/content/result-mind-granade.txt`,
        `This is awasome : ${first} , ${second}`) 
        
    } catch (error) {
        console.log(error)
    }
}

start()