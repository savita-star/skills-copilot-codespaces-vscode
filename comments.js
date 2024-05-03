// Create Web Server
// Create a web server that's going to send a response of "Hello World" for every request it receives. The server should listen on port 3000.

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
}).listen(3000);
