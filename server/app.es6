import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import  jade from 'jade';
import strategy from './config/strategy/strategy.jwt.es6';
import mailer from "express-mailer";
import {findUser} from './models/UserModel';

import {authRouter} from './router/authRouter';
import Router from './router/InscriptionRouter.es6';
import index from './router/index';
import {adsRouter} from './router/adsRouter';


let app = express();

exports.mailer = mailer.extend(app, {
    from : 'contact@farkess.tn',
    host : 'smtp.gmail.com',
    secureConnection : true,
    port : 465,
    transportMethod : 'SMTP',
    auth : {
        user : 'ibra.anarchy@gmail.com',
        pass : 'ibrahimch'
    }
});
app.set('views', __dirname + '\\views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport.use('jwt.strategy', strategy);
app.use(passport.initialize());

 app.get('/getuser', (req, res) =>{
    findUser("che@gmail.com").then(user => {
        console.log(user);
    }).catch(err => {
        console.log(err);
    });

})  ;
app.use('/ads',adsRouter);
app.use('/connection', authRouter);
app.use('/inscription',Router);
app.use('/',index);



// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

export default app;