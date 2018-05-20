import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const vehiculeSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    picture:{type : String},
    type :{type : String , required : true},
    make :{type : String , required : true},
    model :{type : String , required : true},
    year :{type : Number , required : true},
    mileage :{type : Number , required : true},
    fuelType :{type : String , required : true},
    transmission :{type : String , required : true},
    color : {type : String , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]


});

exports.vehiculeSchema =vehiculeSchema ;
let Vehicule =mongoose.model('Vehicule', vehiculeSchema);
exports.VehiculeModel =Vehicule ;

exports.addVehicule =(vehicule)=> {
    let newVehicule = new Vehicule({
        tittle : vehicule.tittle ,
        price : vehicule.price ,
        description:vehicule.description ,
        picture:vehicule.picture ,
        type : vehicule.type,
        make : vehicule.make,
        model : vehicule.model,
    year : vehicule.year,
    mileage : vehicule.mileage,
    fuelType : vehicule.fuelType,
    transmission : vehicule.transmission,
    color : vehicule.color,
        category : vehicule.category,
        user : vehicule.user,
        adress : vehicule.adress
});

return new Promise((resolve, reject) => {
    newVehicule.save((err, res) => {
        err ? reject(err) : resolve(res);
    });
});
};
exports.findVehicule = () => {

    return new Promise((reject, resolve) => {
        Vehicule.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findVehiculeById = (id) => {
    return new Promise((reject,resolve) => {
        Vehicule.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateVehicule = (id, obj) => {
    return new Promise((reject, resolve) => {
        Vehicule.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteVehicule = (id) => {
    return new Promise((reject, resolve) => {
        Vehicule.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};