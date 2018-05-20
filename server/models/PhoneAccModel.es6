import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let phoneaccSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    type : {type : String , required : true},
    model : {type : String, required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.phoneaccSchema = phoneaccSchema;
let PhoneAcc = mongoose.model('PhoneAcc', phoneaccSchema);
exports.PhoneAccModel = PhoneAcc;

exports.addPhoneAcc = (phoneacc) => {
    let newPhoneAcc = new PhoneAcc({
        tittle : phoneacc.tittle ,
        price : phoneacc.price ,
        description:phoneacc.description ,
        state:phoneacc.state ,
        picture:phoneacc.picture ,
        trademark:phoneacc.trademark,
        type : phoneacc.type ,
        model : phoneacc. model,
        category : phoneacc.category,
        user : phoneacc.user,
        adress : phoneacc.adress
    });
    return new Promise((reject, resolve) => {
        newPhoneAcc.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findPhoneAcc = () => {

    return new Promise((reject, resolve) => {
        PhoneAcc.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findPhoneAccById = (id) => {
    return new promise((reject,resolve) => {
        PhoneAcc.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updatePhoneAcc = (id, obj) => {
    return new Promise((reject, resolve) => {
        PhoneAcc.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deletePhoneAcc = (id) => {
    return new Promise((reject, resolve) => {
        PhoneAcc.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};