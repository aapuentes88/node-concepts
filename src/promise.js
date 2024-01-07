import { readFile } from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getText = (path) => {
  return new Promise((resolve, reject) => {

      readFile(path, 'utf8', (err, result) => {
          if (err) {
             reject(err)
          }
          else {
              resolve(result)
          }
      })

  })
}

getText(`${__dirname}/content/first.txt`).then(value => console.log(value))
                                        .catch(err => console.log(err))