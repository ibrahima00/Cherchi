import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let airconditionerSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    power: {type :String},
    trademark:{type : String},
    Dimension : {type : String},
    model : {type : String , required : true},
    function : {type : String} ,//refroidissement ,chauffage
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

/*airconditionerSchema.schema.path('function').validate(function (value) {
    return /refroidissement|chauffage/i.test(value);
}, 'Invalid function');*/

exports.airconditionerSchema = airconditionerSchema;
let AirConditioner = mongoose.model('AirConditioner', airconditionerSchema);
exports.AirConditionerModel = AirConditioner;

exports.addAirConditioner = (airconditioner) => {
    let newAirConditioner = new AirConditioner({
        tittle : airconditioner.tittle ,
        price : airconditioner.price ,
        description:airconditioner.description ,
        state:airconditioner.state ,
        picture:airconditioner.picture ,
        trademark:airconditioner.trademark,
        power : airconditioner.power ,
        Dimension : airconditioner.Dimension ,
        model : airconditioner.model,
        function:airconditioner.function ,
        category : airconditioner.category,
        user : airconditioner.user,
        adress : airconditioner.adress
    });
    return new Promise((reject, resolve) => {
        newAirConditioner.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findAirConditioner = () => {

    return new Promise((reject, resolve) => {
        AirConditioner.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findAirConditionerById = (id) => {
    return new promise((reject,resolve) => {
        AirConditioner.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateAirConditioner = (id, obj) => {
    return new Promise((reject, resolve) => {
        AirConditioner.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteAirConditioner = (id) => {
    return new Promise((reject, resolve) => {
        AirConditioner.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};