import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const heatingSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    power : {type : String , required: true},
    dimension :{type : String , required : true},
    temperature: {type : String , required : true},
    weight :{type : Number , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]

});

exports.heatingSchema =heatingSchema  ;
let Heating =mongoose.model('Heating', heatingSchema);
exports.HeatingModel =Heating ;

exports.addHeating =(heating)=> {
    let newHeating = new Heating({
        tittle : heating.tittle ,
        price : heating.price ,
        description:heating.description ,
        state:heating.state ,
        picture:heating.picture ,
        power : heating.power,
        dimension: heating.dimension,
        temperature: heating.temperature,
        weight:heating.weight,
        category : heating.category,
        user : heating.user,
        adress : heating.adress
    });

    return new Promise((resolve, reject) => {
        newHeating.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findHeating = () => {

    return new Promise((reject, resolve) => {
        Heating.find({})
            .populate('category')
            .populate("user")
            .populate("adress")


            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findHeatingById = (id) => {
    return new Promise((reject,resolve) => {
        Heating.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateHeating = (id, obj) => {
    return new Promise((reject, resolve) => {
        Heating.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteHeating = (id) => {
    return new Promise((reject, resolve) => {
        Heating.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};