const htpp = require('http');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();

module.exports = class Application {
    constructor() {
        this.serverConfig();
        this.databaseConfig();
        this.setConfig();
        this.setRoutes();
    };
    serverConfig() {
        app.listen(5000, () => {
            console.log('Server is running on port: ' + 5000);
        });
    };
    async databaseConfig () {
        await mongoose.connect('mongodb://localhost/my-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true,
        });
    };
    setConfig() {
        app.use(express.static(__dirname + '/public'));
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'resource/views'));
        app.use(expressLayouts);
        app.set('layout' , 'theme')
        app.set('layout extractStyles', true);
        app.set('layout extractScripts', true);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(session({
            secret: 'my-secret',
            resave: true,
            saveUninitialized: true,
            store: connectMongo.create({ mongoUrl: 'mongodb://localhost/my-app' }),
            cookie: { secure: false}
        }))
        app.use(cookieParser());
        app.use(flash());
    }
    setRoutes() {
        app.use(require('./routes'));
    }
};