const http = require('http')
const port = 8000
const host = 'localhost'

//A sample event listener
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};


// This is the syntax for adding event listeners, here requestListener is an event listener.
const server = http.createServer(requestListener)

server.listen(port,host,()=>{console.log('server is running')})