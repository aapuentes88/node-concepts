import { createReadStream, createWriteStream } from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
// import { setInterval } from 'timers/promises'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaReadStream = path.join(__dirname, 'assets', 'nombres.txt');
const rutaWriteStream = path.join(__dirname, 'assets', 'nombres_copia.txt');

var readStream = createReadStream(rutaReadStream)
var writeStream = createWriteStream(rutaWriteStream)

readStream.pipe(writeStream)

readStream.on('data', function (chunck) { console.log('He leido', chunck.length, ' caracteres') })
readStream.on('end', function () { console.log('termine de leer') })