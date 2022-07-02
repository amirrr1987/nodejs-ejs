const htpp = require('http');
const express = require('express');
const app = express();

module.exports = class Application {
    constructor() {
        this.serverConfig();
    };
    serverConfig() {
        app.get('/', (req, res) => {
            res.end('<h1>Hello World</h1>');
        });
        app.listen(5000, () => {
            console.log('Server is running on port: ' + 5000);
        });
    };
};