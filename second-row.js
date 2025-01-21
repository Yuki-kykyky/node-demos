const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received',
        req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>hello from Node.js</title></head>');
    res.write('<body><h1>Hello, world! i have plan to learn more tech to make myself more clever!</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
});

server.listen(3000);