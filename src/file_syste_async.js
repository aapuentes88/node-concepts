import { readFile, writeFile } from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('start')
readFile(`${__dirname}/content/first.txt`, 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first  = result
    console.log(first)
    readFile(`${__dirname}/content/second.txt`, 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
    
        const second  = result
        console.log(second)
        writeFile(`${__dirname}/content/result-async.txt`,
        `Here is the result : ${first} , ${second}`,
         (err, result) => {
            if (err) {
                console.log(err)
                return
            }
        
            console.log('done whit the task')
            
        })
        
    })

})
console.log('staring new task')