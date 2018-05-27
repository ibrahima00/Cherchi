import express from 'express';
import {addAdress} from "../models/AdressModel";
import {addAds,findAds,findAdsAdmin,updateAds,deleteAds } from "../models/AdsModel";
import { findUserById} from "../models/UserModel"
import mongoose from 'mongoose';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware'; 
const router = express.Router();
const  base64Img = require('base64-img');



router.route('/annonce')
    .post ( imagesUpload
        (
        'public/img',
        'http://localhost:3040/static/multipleFiles',
        true
    ),
    (req, res)=>  {
        console.log("id is" + req.body.id
    + "user" + req.body.imageName)
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
                User: user._id,
                isVerified:false ,
                imageName : req.body.imageName
            },  
               res.status(200).json("ok success"),
                base64Img.base64('public/test'+ req.body.files, function(err, data) {} )
            )
                .catch((err) =>
                { 
                    console.log(err)
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
                console.log("err Server" + err)
                res.json(err)

        })

    });

    router.route('/profili')
    .get((req, res)=> {
        findAds()
            .then((data)=>{
                res.status(200).json({data:data})

            }).catch( (err)=>{
                console.log("err Server" + err)
                res.json(err)

        })

    });



    //*************fetch ads(not verified) in admin component */


    router.route('/annonces/admin')
    .get((req, res)=> {
        findAdsAdmin()
            .then((data)=>{
                res.status(200).json({data:data})

            }).catch( (err)=>{
                console.log("err server" + err)
                res.json(err)

        })

    });





    //*************Update Ad (approuver) */

    router.route('/annonces/admin/approuver')
    .post((req, res)=> {
        let id  = req.body.id 

        console.log("id is"+ id)
        let obj ={
            isVerified : true
        }

        updateAds(id,obj).then((resultat) => {
            console.log("approuver" + resultat)
            res.status(200).json({'ad': resultat});
        }).catch((err) => {
            console.log('erreur erreur erreur erreur'+ err);
            res.json(err)
        });


    });





//************************** Delete Ads from admin */

router.route('/annonces/admin/supprimer')
.post((req, res)=> {
    let id  = req.body.id 
   

    deleteAds(id).then((resultat) => {
        console.log("supprimer" + resultat)
        res.status(200).json({'ad': resultat});
    }).catch((err) => {
        console.log('erreur erreur erreur erreur'+ err);
        res.json(err)
    });


});

//************************** image upload */
    router
    .post('/multiple', imagesUpload(
        'public/img',
        'http://localhost:3040/static/multipleFiles',
        true
    ));


exports.adsRouter=router;