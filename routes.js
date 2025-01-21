const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html lang="en">');
        res.write('<head><title>there is a test</title></head>');
        res.write('<body><form action="/message" method="post">' +
            '<input type="text" name="test-context"><button type="submit">send</button> ' +
            '</form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[0]
            fs.writeFileSync('message.txt', message)
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>hello from Node.js</title></head>');
    res.write('<body><h1>Hello, world! this is some words from Node.js</h1></body>');
    res.write('</html>');
    res.end();
    // if you want to keep the server running, remove the process.exit() call
    // process.exit();
}

module.exports.handler = requestHandler;
module.exports.someText = 'some hard coded text';