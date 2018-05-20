import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const graphicscardsSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    memory :{type : String , required : true},
    model :{type : String , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]


});

exports.graphicscardsSchema =graphicscardsSchema ;
let Graphicscards =mongoose.model('Graphicscards', processorSchema);
exports.GraphicscardsModel =Graphicscards ;

exports.addGraphicscards =(graphicscards)=> {
    let newGraphicscards = new Graphicscards({
        tittle : computer.tittle ,
        price : computer.price ,
        description:computer.description ,
        state:computer.state ,
        picture:computer.picture ,
        trademark:computer.trademark,
        corenumber : graphicscards.corenumber,
        model: graphicscards.model,
        category : computer.category,
        user : computer.user,
        adress : computer.adress
    });

    return new Promise((resolve, reject) => {
        newGraphicscards.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findGraphicscards = () => {

    return new Promise((reject, resolve) => {
        Graphicscards.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findGraphicscardsById = (id) => {
    return new Promise((reject,resolve) => {
        Graphicscards.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateGraphicscards = (id, obj) => {
    return new Promise((reject, resolve) => {
        Graphicscards.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteGraphicscards = (id) => {
    return new Promise((reject, resolve) => {
        Graphicscards.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};