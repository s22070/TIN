const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(homePage());
    } else if (req.url === '/register') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(registrationPage());
    } else if (req.url === '/cat') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(catPage());
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(notSupportedPage());
    }
});

server.listen(8080, () => {
    console.log('Server running!');
});

function homePage() {
    return 'Welcome to the home page';
}

function registrationPage() {
    return 'This is a page for registration purposes';
}

function catPage() {
    return 'No cat for you!';
}

function notSupportedPage() {
    return 'Page not supported, yet!';
}