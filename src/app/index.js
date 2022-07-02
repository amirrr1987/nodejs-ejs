const htpp = require('http');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

module.exports = class Application {
    constructor() {
        this.serverConfig();
        this.setConfig();
        this.setRoutes();
    };
    serverConfig() {
        app.listen(5000, () => {
            console.log('Server is running on port: ' + 5000);
        });
    };
    setConfig() {
        // app.use(express.static(__dirname + 'public'));
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'resource/views'));
        app.use(expressLayouts);
        // app.set('layout' , './theme/index')
        app.set('layout extractStyles', true);
        app.set('layout extractScripts', true);
    }
    setRoutes() {
        app.get('/', (req, res) => {
            res.render('index');
        });
        app.get('/about', (req, res) => {
            res.render('about');
        });
        app.get('/gallery', (req, res) => {
            res.render('gallery');
        });
        app.get('/contact', (req, res) => {
            res.render('contact');
        });
    }
};