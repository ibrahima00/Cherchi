import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const computerSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    screenSize :{type : Number },
    ram :{type : String },
    processor :{type : String },
    hardDriveCapacity :{type : Number },
    model : {type : String },
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]


});

exports.computerSchema =computerSchema ;
let Computer =mongoose.model('Computer', computerSchema);
exports.ComputerModel =Computer ;

exports.addComputer =(computer)=> {
    let newComputer = new Computer({
        tittle : computer.tittle ,
        price : computer.price ,
        description:computer.description ,
        state:computer.state ,
        picture:computer.picture ,
        trademark:computer.trademark,
        screenSize : computer.screenSize ,
        ram: computer.ram,
        processor: computer.processor,
        hardDriveCapacity: computer.hardDriveCapacity,
        model: computer.model,
        category : computer.category,
        user : computer.user,
        adress : computer.adress
    });

    return new Promise((resolve, reject) => {
        newComputer.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findComputer = () => {

    return new Promise((reject, resolve) => {
        Computer.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findComputerById = (id) => {
    return new Promise((reject,resolve) => {
        Computer.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateComputer = (id, obj) => {
    return new Promise((reject, resolve) => {
        Computer.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteComputer = (id) => {
    return new Promise((reject, resolve) => {
        Computer.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};