import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let clothingSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark:{type : String},
    type : {type : String },
    model : {type : String},
    size : {type : String},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.clothingSchema =clothingSchema;
let Clothing = mongoose.model('Clothing', clothingSchema);
exports.ClothingModel = Clothing;

exports.addClothing = (clothing) => {
    let newClothing = new Clothing({
        tittle : clothing.tittle ,
        price : clothing.price ,
        description:clothing.description ,
        state:clothing.state ,
        picture:clothing.picture ,
        trademark:clothing.trademark,
        type : clothing.type ,
        model : clothing. model,
        size : clothing.phones,
        category : clothing.category,
        user : clothing.user,
        adress : clothing.adress
    });
    return new Promise((reject, resolve) => {
        newClothing.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findClothing = () => {

    return new Promise((reject, resolve) => {
        Clothing.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findClothingById = (id) => {
    return new promise((reject,resolve) => {
        Clothing.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateClothing = (id, obj) => {
    return new Promise((reject, resolve) => {
        Clothing.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteClothing = (id) => {
    return new Promise((reject, resolve) => {
        Clothing.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};