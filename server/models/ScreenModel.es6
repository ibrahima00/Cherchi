import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const screenSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    resolution :{type : String , required : true},
    size :{type : String , required : true},
    model :{type : String , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]


});

exports.screenSchema =screenSchema ;
let Screen =mongoose.model('Screen', screenSchema);
exports.ScreenModel =Screen ;

exports.addScreen =(screen)=> {
    let newScreen = new Screen({
        tittle : screen.tittle ,
        price : screen.price ,
        description:screen.description ,
        state:screen.state ,
        picture:screen.picture ,
        trademark : screen.trademark ,
        resolution : screen.resolution,
        size: screen.size,
        model: screen.model,
        category : screen.category,
        user : screen.user,
        adress : screen.adress
    });

    return new Promise((resolve, reject) => {
        newScreen.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findPets = () => {

    return new Promise((reject, resolve) => {
        Screen.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findScreenById = (id) => {
    return new Promise((reject,resolve) => {
        Screen.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateScreen = (id, obj) => {
    return new Promise((reject, resolve) => {
        Screen.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteScreen = (id) => {
    return new Promise((reject, resolve) => {
        Screen.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};