import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let musicalinstrumentSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    model :{ type :[String]},// yamaha ....
    type : {type : [String]},//Piano , guitar , saxophone
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]});

exports.musicalinstrumentSchema = musicalinstrumentSchema;
let MusicalInstrument = mongoose.model('MusicalInstrument', musicalinstrumentSchema);
exports.MusicalInstrumentModel = MusicalInstrument;

exports.addMusicalInstrument = (musicalinstrument) => {
    let newMusicalInstrument = new MusicalInstrument({
        tittle : musicalinstrument.tittle ,
        price : musicalinstrument.price ,
        description:musicalinstrument.description ,
        state:musicalinstrument.state ,
        picture:musicalinstrument.picture ,
        model : musicalinstrument.model ,
        type : musicalinstrument.type,
        category : musicalinstrument.category,
        user : musicalinstrument.user,
        adress : musicalinstrument.adress
    });
    return new Promise((reject, resolve) => {
        newMusicalInstrument.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findMusicalInstrument = () => {

    return new Promise((reject, resolve) => {
        MusicalInstrument.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findMusicalInstrumentById = (id) => {
    return new promise((reject,resolve) => {
        MusicalInstrument.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateMusicalInstrument = (id, obj) => {
    return new Promise((reject, resolve) => {
        MusicalInstrument.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteMusicalInstrument = (id) => {
    return new Promise((reject, resolve) => {
        MusicalInstrument.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};