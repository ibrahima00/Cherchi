import express from 'express';
import {addAdress} from "../models/AdressModel";
import {addAds,findAds} from "../models/AdsModel";
import { findUserById} from "../models/UserModel"
import mongoose from 'mongoose';
const router = express.Router();


router.route('/annonce')
    .post ((req, res)=> {
        console.log("id is" + req.body.id)
    addAdress({
        street: req.body.street,
        city: req.body.city,
        zip: req.body.zip,
    }).then((adress) => {

        findUserById(req.body.id).then((user) => {
             console.log("user is" + user)
            addAds({
                title:req.body.title,
                price : req.body.price ,
                description:req.body.description ,
                email:req.body.email ,
                subCategory : req.body.subCategory,
                category:req.body.category,
                adress: adress._id,
                User: user
            },  res.status(200).json("ok success")).catch((err) =>
            { console.log(err)

                res.status(500).json(err)

            })

        })


    })

                //res.redirect('/');
            });






router.route('/annonces')
    .get((req, res)=> {
        findAds()
            .then((data)=>{
                res.status(200).json({data:data})

            }).catch( (err)=>{
                console.log("err server" + err)
                res.json(err)

        })

    });



exports.adsRouter=router;