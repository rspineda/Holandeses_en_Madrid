const express = require('express'),
        bodyParser = require('body-parser'),
        session = require('express-session'),
        morgan = require('morgan'),
        helmet = require('helmet'),
        routes = require('./routes/dutch-routes'),
        auth = require('./routes/auth-routes'),
        messages = require('./routes/message-routes'),
        errors = require('./middlewares/errors'),
        app = express(),
        path = require('path'),
        config = require('./config');



app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('secretKey', config.secret); //clave privada para el JWT
app.use(helmet());
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "img-src 'self' data: https://*");
    return next();
});
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
app.use(express.static(path.join(__dirname,'public')));
app.use(routes);
app.use(auth);
app.use(messages);
//app.use(errors.https404);


module.exports = app;

