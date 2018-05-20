import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const webcamSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    resolution :{type : String , required : true},
    model :{type : String , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]


});

exports.webcamSchema =webcamSchema ;
let Webcam =mongoose.model('Webcam', webcamSchema);
exports.WebcamModel =Webcam ;

exports.addWebcam =(webcam)=> {
    let newWebcam = new Webcam({
        tittle : webcam.tittle ,
        price : webcam.price ,
        description:webcam.description ,
        state:webcam.state ,
        picture:webcam.picture ,
        trademark:webcam.trademark,
        resolution : webcam.resolution,
        model: webcam.model,
        technology: webcam.technology,
        category : webcam.category,
        user : webcam.user,
        adress : webcam.adress
    });

    return new Promise((resolve, reject) => {
        newWebcam.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findWebcam = () => {

    return new Promise((reject, resolve) => {
        Webcam.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findWebcamById = (id) => {
    return new Promise((reject,resolve) => {
        Webcam.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateWebcam = (id, obj) => {
    return new Promise((reject, resolve) => {
        Webcam.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteWebcam = (id) => {
    return new Promise((reject, resolve) => {
        Webcam.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};