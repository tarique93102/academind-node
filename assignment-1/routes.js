
const userRequestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h1>Hello From The Other Side</h1><br/><form action="/create-user" method="POST"><input placeholder="Username" type="text/html" name="create-user"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
};

module.exports = userRequestHandler;