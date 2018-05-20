import mongoose from 'mongoose';

const adressSchema = new mongoose.Schema ({
    street : {type:String},
    city : {type:String},
    state :{type:String},
    zip : {type:Number}
});
exports.adressSchema = adressSchema;
let Adress = mongoose.model('Adress', adressSchema);
exports.AdressModel = Adress;



exports.addAdress = (adress) => {
    let newAdress = new Adress({
        street : adress.street,
        city : adress.city,
        state : adress.state,
        zip : adress.zip
    });

    return new Promise((resolve, reject) => {
        newAdress.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.findAdress = () => {

    return new Promise((reject, resolve) => {
        Adress.find({}, (err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findAdressById = (id) => {
    return new promise((reject,resolve) => {
        Adress.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateAdress = (id, obj) => {
    return new Promise((reject, resolve) => {
        Adress.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteAdress = (id) => {
    return new Promise((reject, resolve) => {
        Adress.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};