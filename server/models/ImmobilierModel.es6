import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let immobilierSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    type : {type :String},
    area : {type : Number},
    rooms : {type : Number},
    furniture : {type : Boolean},
    nature : {type : String},
    periodicity : {type : ['mois','semaine','ans']},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.immobilierSchema = immobilierSchema;
let Immobilier = mongoose.model('Immobilier', immobilierSchema);
exports.ImmobilierModel = Immobilier;

exports.addImmobilier = (immobilier) => {
    let newImmobilier= new INummobilier({
        tittle : immobilier.tittle ,
        price : immobilier.price ,
        description:immobilier.description ,
        state:immobilier.state ,
        picture:immobilier.picture ,
        type : immobilier.type,
        area : immobilier.area,
        rooms : immobilier.rooms,
        furniture: immobilier.furniture,
        nature : immobilier.nature,
        category : immobilier.category,
        user : immobilier.user,
        adress : immobilier.adress
    });
    return new Promise((resolve, reject) => {
        newImmobilier.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findImmobilier = () => {
    return new Promise((reject, resolve) => {
        Immobilier.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
};
exports.findImmobilierById = (id) => {
    return new Promise((reject,resolve) => {
        Immobilier.findById(id , (res , err) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateImmobilier = (id, obj) => {
    return new Promise((reject, resolve) => {
        Immobilier.findByIdAndUpdate(id, obj, (res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteImmobilier = (id) => {
    return new Promise((reject, resolve) => {
        Immobilier.find(id).remove((res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};