import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const adsSchema = new mongoose.Schema ({
    title : {type : String},
    price : {type : Number},
    description:{type : String},
    email :{type:String},
    statut:{type : String},
    subCategory:{type:String},
    category:{type:String},
    adress:{type : mongoose.Schema.Types.ObjectId, ref : 'Adress'},
    User:{type : mongoose.Schema.Types.ObjectId, ref : 'User'}

});
exports.adsSchema = adsSchema;
let Ads = mongoose.model('Ads', adsSchema);
exports.AdsModel = Ads;



exports.addAds = ({title,price,description,statut,subCategory,category,email,adress,user}) => {
    let newAds = new Ads({
        title : title ,
        price : price ,
        description:description ,
        statut:statut ,
        subCategory : subCategory,
        category:category,
        email:email,
        adress : adress,
        User : user
    });

    return new Promise((resolve, reject) => {
        newAds.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.findAds = () => {

    return new Promise((reject, resolve) => {
        Ads.find({})
            .populate('adress')
            .populate('User')
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findAdsById = (id) => {
    return new promise((reject,resolve) => {
        Ads.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateAds = (id, obj) => {
    return new Promise((reject, resolve) => {
        Ads.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteAds = (id) => {
    return new Promise((reject, resolve) => {
        Ads.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};