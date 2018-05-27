import express from 'express';
import jwt from "jsonwebtoken";
import {addToken, findTokenById, findToken} from "../models/TokenModel.es6";
import {findUser,updateUser,findUserById,updatePassword} from "../models/UserModel.es6";
import bcrypt from "bcrypt-nodejs";
import  {jwtOptions} from '../config/strategy/strategy.jwt';
const router = express.Router();

router.get('/verify/:token', (req, res) => {
    let token = req.params.token;
    findToken(token).then((result) => {
        let id = result.userId._id;
        let obj = {
            isVerified : true
        };
        updateUser(id,obj).then((active) => {
            findUserById(active._id).then((resultat) => {
                res.render('home', {user: resultat});
            }).catch((erreur) => {
                console.log('erreur erreur erreur erreur');
            });
        }).catch((error) => {
            console.log('erreur : ', err);
        });
    }).catch((err) => {
        console.log('error : ',err);
    });
});


router.route('/con').post((req, res) => {
    let email = req.body.email ;
    let password = req.body.password;
    let user = findUser(email).then((user) => {
        bcrypt.compare(password, user.password, (err, result) => {
            if(result) {
                // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
                let payload = {id: user._id};
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                addToken({userId :user._id ,token: token}).then((resultat) => {
                    findTokenById(resultat._id).then((natija) => {
                        res.json({natija : natija, id: user._id});
                    }).catch((err) => {
                        console.log('fama ghalta ', err);
                    });
                }).catch(err =>{
                    console.log('erreur : ',err);
                });

            } else {
                res.status(401).json({message:"passwords did not match"});
            }
        });
    }).catch((err) => {
        console.log('email does not exist');
        res.status(401).json({message : 'email does not exist'});
    });
});

/*router.post('/resetpassword', (req, res) => {
    let email = req.body.email;
    findUser(email).then((result) => {
        res.mailer.send('reset-email',
            {
                to : result.email,
                subject : 'Reset your password',
                id : result._id
            },
            (err) => {
                if (err) {
                    console.log('email not sent', err);
                } else {
                    console.log('email sent successfully');
                }
            });
    }).catch((err) => {
        console.log('erreur : ', err);
    });
    res.send('chouf el inbox');
});

router.get('/updatepassword/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.render('update', {id : id});
});

router.post('/changepassword/:id', (req, res) => {
    let id = req.params.id;
    let password = req.body.password;
    let pass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    updatePassword(id, pass)
        .then((result) => {
            findUserById(id).then((user) => {
                console.log(user);
                //res.render('home');
            }).catch((err) => {
                console.log('error password did not change', err);
            });
        }).catch((err) => {
        console.log('failed to change password');
        res.send(err);
        console.log(err);
    });

});*/


router.route('/profile').post((req, res) => {


    let id= req.body.id;
    console.log("token" + id)

            findUserById(id).then((resultat) => {
                res.status(200).json({'user': resultat});
            }).catch((err) => {
                console.log('erreur erreur erreur erreur'+ err);
                res.json(err)
            });


});
router.route('/profili').post((req, res) => {


    let id= req.body.id;
    console.log("token" + id)

            findUserById(id).then((resultat) => {
                res.status(200).json({'user': resultat});
            }).catch((err) => {
                console.log('erreur erreur erreur erreur'+ err);
                res.json(err)
            });


});



/**update Profile (modifier les cordonnées d'utulisateur) */
router.route('/update').post((req, res) => {

    let id= req.body.id;
    let obj ={
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        phoneNumber : req.body.phoneNumber
    }

            updateUser(id,obj).then((resultat) => {
                res.status(200).json({'use': resultat});
            }).catch((err) => {
                console.log('erreur erreur erreur erreur'+ err);
                res.json(err)
            });


});



exports.authRouter=router;