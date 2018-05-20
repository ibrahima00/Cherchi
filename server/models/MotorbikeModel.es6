import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const motorbikeSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    type :{type : String , required : true},
    make :{type : String , required : true},
    model :{type : String , required : true},
    year :{type : Number , required : true},
    mileage :{type : Number , required : true},
    fuelType :{type : String , required : true},
    color : {type : String , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.motorbikeSchema =motorbikeSchema ;
let Motorbike =mongoose.model('Motorbike', motorbikeSchema);
exports.MotorbikeModel =Motorbike ;

exports.addMotorbike =(motorbike)=> {
    let newMotorbike = new Motorbike({
        tittle : motorbike.tittle ,
        price : motorbike.price ,
        description:motorbike.description ,
        state:motorbike.state ,
        picture:motorbike.picture ,
        type: motorbike.type,
        make: motorbike.make,
        model: motorbike.model,
        year: motorbike.year,
        mileage: motorbike.mileage,
        fuelType: motorbike.fuelType,
        color:motorbike.color,
        category : motorbike.category,
        user : motorbike.user,
        adress : motorbike.adress    });

    return new Promise((resolve, reject) => {
        newMotorbike.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findMotorbike = () => {

    return new Promise((reject, resolve) => {
        Motorbike.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findMotorbikeById = (id) => {
    return new Promise((reject,resolve) => {
        Motorbike.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateMotorbike = (id, obj) => {
    return new Promise((reject, resolve) => {
        Motorbike.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteMotorbike = (id) => {
    return new Promise((reject, resolve) => {
        Motorbike.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};