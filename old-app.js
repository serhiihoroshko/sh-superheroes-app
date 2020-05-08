const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.url);
    if(req.url === '/index.html' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
});

server.listen(4200, 'localhost');
console.log('yar! I am listening to port 4200');