import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('start')
const first = readFileSync(`${__dirname}/content/first.txt`, 'utf8')
const second = readFileSync(`${__dirname}/content/second.txt`, 'utf8')

writeFileSync(`${__dirname}/content/result-sync.txt`,
    `Here is the result : ${first} , ${second}`,
    { flag: 'a' }) //El ultimo parametro es para no sobrescribir 
//el texo del archivo y solo agregar la nueva informacion

console.log('done whit the task')
console.log('staring new task')