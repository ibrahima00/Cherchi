import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt-nodejs';
import {addToken} from "../models/TokenModel";
import {addAdress} from "../models/AdressModel";
import {addParticular} from "../models/ParticularModel";
import {AddCompany} from "../models/CompanyModel";
import {addUser} from "../models/UserModel";
import {jwtOptions} from '../config/strategy/strategy.jwt';


const router= express.Router();

router.route('/particular').post ((req, res)=> {
    addUser({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: 'particular',
        phoneNumber: req.body.phoneNumber,
        isVerified: false
    }).then((user) => {
        addAdress  ({
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
        }).then((adress)=> {
            addParticular({
                gender: req.body.gender,
                picture: req.body.picture,
                situation: req.body.situation,
                age: req.body.age,
                user: user._id,
                adress: adress._id
            }).then((particular) => {
                let payload = {id: user._id};
                let _token = jwt.sign(payload, jwtOptions.secretOrKey);
                addToken({userId: user._id, token: _token})
                    .then((token) => {
                        res.mailer.send('email', {
                            to: user.email,
                            subject: 'Verification de compte',
                            token: _token
                        }, (err) => {
                            if (err) {
                                console.log('error : ', err);
                            } else {
                                console.log('the email is sent');
                                res.json({token :token.token});
                            }
                        });
                    }).catch((err) => console.log(err));
                res.redirect('/confirmer');
            });
        });
    });
});


   router.route('/company').post ((req, res) => {
           addAdress ({
               street: req.body.street,
               city: req.body.city,
               state: req.body.state,
               zip: req.body.zip,
               name: req.body.name,
               location: req.body.location
           }).then(adress => {
               AddCompany({
                   entitled: req.body.entitled,
                   email: req.body.email,
                   password: req.body.password,
                   role: 'company',
                   isVerified: false,
                   taxRegisterNumber: req.body.taxRegisterNumber,
                   webSite: req.body.webSite,
                   taxStatus: req.body.taxStatus,
                   logo: req.body.logo,
                   type: req.body.type,
                   description: req.body.description,
                   user: user._id,
                   adress: adress._id
               }).then(company => {
                   let payload = {id: user._id};
                   let token = jwt.sign(payload, jwtOptions.secretOrKey);
                   addToken({userId: user._id, token: token})
                       .then((token) => {
                           res.mailer.send('email', {
                               to: user.email,
                               subject: 'Verification de compte',
                               token: token.token,
                               user: user.firstName
                           }, (err) => {
                               if (err) {
                                   console.log('error : ', err);
                               } else {
                                   console.log('the email is sent');
                               }
                           });
                       }).catch((err) => console.log(err));
                   res.redirect('/');

               })


       });
   });

export default router;
