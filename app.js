const express = require('express'),
        bodyParser = require('body-parser'),
        session = require('express-session'),
        morgan = require('morgan'),
        helmet = require('helmet'),
        routes = require('./routes/dutch-routes'),
        auth = require('./routes/auth-routes'),
        errors = require('./middlewares/errors'),
        app = express();

app.set('view engine', 'pug');
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret: 'madrid',
    resave: true,
    saveUninitialized: true,
    //cookie: {secure: true}    //produccion
}))
//app.set('trust proxy', 1);     //produccion
app.use(morgan('dev'));
app.use(express.static('public'));
//app.use(routes);
//app.use(auth);
//app.use(errors.https404);

module.exports = app;

