const http = require('http');
const port = 5000;
const app = http.createServer((req, res) => {
    res.setHeader(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})