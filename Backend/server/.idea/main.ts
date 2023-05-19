const http = require('http')


const port = 8000
const host = 'localhost'
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};


const server = http.createServer(requestListener)

server.listen(port,host,()=>{console.log('server is running')})