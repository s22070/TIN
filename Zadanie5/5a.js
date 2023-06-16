const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Welcome to the home page");
    } else if (req.url === '/register') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("This is a page for registration purposes");
    } else if (req.url === '/cat') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("No cat for you!");
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not supported, yet!');
    }
});

server.listen(8080, () => {
    console.log('Server running!');
});