const htpp = require('http');

module.exports = class Application {
    constructor() {
        this.serverConfig();
       
    }

    serverConfig() {
        const server = htpp.createServer((req, res) => {
            res.setHeader(200, { 'Content-Type': 'text/html', server: 'nodejs' });
            res.end('<h1>Hello World</h1>');
        });

        server.listen(5000, () => {
            console.log('Server is running on port: ' + 5000);
        });
         
    }

}