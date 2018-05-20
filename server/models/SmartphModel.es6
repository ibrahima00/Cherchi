import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let smartphSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    operetingsys : {type : String , required : true},
    memory : {type : String , required : true},
    camera : {type : String, required : true},
    screensize : {type : Number, required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]});

exports.smartphSchema = smartphSchema;
let Smartph = mongoose.model('Smartph', smartphSchema);
exports.SmartphModel = Smartph;

exports.addSmartph = (smartph) => {
    let newSmartph = new Smartph({
        tittle : smartph.tittle ,
        price : smartph.price ,
        description:smartph.description ,
        state:smartph.state ,
        picture:smartph.picture ,
        trademark:smartph.trademark,
        operetingsys:smartph.operetingsys,
        memory : smartph.memory,
        camera : smartph.camera,
        screensize  : smartph.screensize ,
        category : smartph.category,
        user : smartph.user,
        adress : smartph.adress
        

    });
    return new Promise((reject, resolve) => {
        newSmartph.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findSmartph = () => {

    return new Promise((reject, resolve) => {
        Smartph.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
               err ? reject(err) : resolve(res);
           });
        });
};
exports.findSmartphById = (id) => {
    return new promise((reject,resolve) => {
        Smartph.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateSmartph = (id, obj) => {
    return new Promise((reject, resolve) => {
        Smartph.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteSmartph = (id) => {
    return new Promise((reject, resolve) => {
        Smartph.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};