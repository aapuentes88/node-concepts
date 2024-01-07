
var buf = new ArrayBuffer(26)
var str = '\u00bd + \u00bc = \u00be'

console.log(
    buf,
    '\n',
    buf.toString('ascii'),
    '\n',
    str + '\n',
    str.length + ' caracteres' + '\n',
    Buffer.byteLength(str, 'utf8') + ' bytes' + '\n'

)

for (let i = 0; i < buf.length; i++) {
    buf[i] = i + 97;
    // console.log(buf[i]);
}

const obj = Buffer.from(buf).toString();
for (let i in obj) {
    console.log(
        obj[i], '   ', buf[i]
    );
}
// console.log(buf.toString('ascii'));