import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let fridgeSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    power: {type :String},
    doorsnumber : {type : Number},
    model : {type : String },
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.fridgeSchema = fridgeSchema;
let Fridge = mongoose.model('Fridge', fridgeSchema);
exports.FridgeModel = Fridge;

exports.addFridge = (fridge) => {
    let newFridge = new Fridge({
        tittle : fridge.tittle ,
        price : fridge.price ,
        description:fridge.description ,
        state:fridge.state ,
        picture:fridge.picture ,
        trademark:fridge.trademark,
        power : fridge.power ,
        doorsnumber : fridge.doorsnumber ,
        model : fridge.model,
        category : fridge.category,
        user : fridge.user,
        adress : fridge.adress
    });
    return new Promise((reject, resolve) => {
        newFridge.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findFridge = () => {

    return new Promise((reject, resolve) => {
        Fridge.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findFridgeById = (id) => {
    return new promise((reject,resolve) => {
        Fridge.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateFridge = (id, obj) => {
    return new Promise((reject, resolve) => {
        Fridge.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteFridge = (id) => {
    return new Promise((reject, resolve) => {
        Fridge.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};