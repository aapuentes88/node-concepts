// 'use strict'
// import { createServer } from 'http'

// createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/plain'})
//     res.end('Hello World\n')
// }).listen(1337, "127.0.0.1")

// console.log('Server running at http://127.0.0.1:1337/')


'use strict'
//-----------------http server-----------------------------

import { createServer } from 'http'

// function webServer(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     if(req.url === '/')
//     res.end('<h1>Hello Node.js</h1>')

//     if(req.url === '/about')
//     res.end('<h1>Here is our short history</h1>')

//     res.end(`<h1>Oops!</h1>
//              <p>We cant seem to find  the page</p>
//              <a href="/">Back to home </a>`)


// }

// createServer(webServer).listen(3000, "localhost")
const server = createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    if(req.url === '/')
    res.end('<h1>Hello Node.js</h1>')

    if(req.url === '/about')
    res.end('<h1>Here is our short history</h1>')
    
    res.end(`<h1>Oops!</h1>
             <p>We cant seem to find  the page</p>
             <a href="/">Back to home </a>`)


})
server.listen(3000)


console.log('Server running at http://localhost:3000/')