import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const batterySchema = new mongoose.Schema({
    power :{type : String , required : true},
    model :{type : String , required : true},
    technology : {type : Schema.Types.ObjectId , ref : 'Technology'},

});

exports.batterySchema =batterySchema ;
let Battery =mongoose.model('Battery', batterySchema);
exports.BatteryModel =Battery ;

exports.addBattery =(battery)=> {
    let newBattery = new Battery({
        power : battery.power,
        model: battery.model,
        technology:battery.technology,
    });

    return new Promise((resolve, reject) => {
        newBattery.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findBattery = () => {

    return new Promise((reject, resolve) => {
        Battery.find({})
            .populate("technology")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findBatteryById = (id) => {
    return new Promise((reject,resolve) => {
        Battery.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateBattery = (id, obj) => {
    return new Promise((reject, resolve) => {
        Battery.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteBattery = (id) => {
    return new Promise((reject, resolve) => {
        Battery.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};