import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const harddriveSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    discspace :{type : String , required : true},
    model :{type : String , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]


});

exports.harddriveSchema =harddriveSchema ;
let Harddrive =mongoose.model('Harddrive', harddriveSchema);
exports.HarddriveModel =Harddrive ;

exports.addHarddrive =(harddrive)=> {
    let newHarddrive = new Harddrive({
        tittle : computer.tittle ,
        price : computer.price ,
        description:computer.description ,
        state:computer.state ,
        picture:computer.picture ,
        trademark:computer.trademark,
        discspace : harddrive.discspace,
        model: harddrive.model,
        category : computer.category,
        user : computer.user,
        adress : computer.adress
    });

    return new Promise((resolve, reject) => {
        newHarddrive.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findHarddrive = () => {

    return new Promise((reject, resolve) => {
        Harddrive.find({})
            .populate('category')
            .populate("user")
            .populate("adress")

            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findHarddriveById = (id) => {
    return new Promise((reject,resolve) => {
        Harddrive.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateWebcam = (id, obj) => {
    return new Promise((reject, resolve) => {
        Harddrive.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteHarddrive = (id) => {
    return new Promise((reject, resolve) => {
        Harddrive.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};