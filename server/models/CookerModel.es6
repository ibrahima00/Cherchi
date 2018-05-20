import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cookerSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    Dimension :{type : String , required : true},
    supply:{type : String , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]

});

exports.cookerSchema =cookerSchema ;
let Cooker =mongoose.model('Cooker', cookerSchema);
exports.CookerModel =Cooker ;

exports.addCooker =(cooker)=> {
    let newCooker = new Cooker({
        tittle : cooker.tittle ,
        price : cooker.price ,
        description:cooker.description ,
        state:cooker.state ,
        picture:cooker.picture ,
        power : cooker.power,
        model: cooker.model,
        category : cooker.category,
        user : cooker.user,
        adress : cooker.adress

    });

    return new Promise((resolve, reject) => {
        newCooker.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findCooker = () => {

    return new Promise((reject, resolve) => {
        Cooker.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findCookerById = (id) => {
    return new Promise((reject,resolve) => {
        Cooker.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateCooker = (id, obj) => {
    return new Promise((reject, resolve) => {
        Cooker.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteCooker = (id) => {
    return new Promise((reject, resolve) => {
        Cooker.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};