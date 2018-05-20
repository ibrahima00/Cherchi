import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let materialsSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    state:{type : String},
    picture:{type : String},
    type:{type : String} ,
    trademark:{type : String},
    model : {type : String },
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.materialssSchema = materialssSchema;
let Materials = mongoose.model('Materials', materialssSchema);
exports.MaterialsModel = Materials;

exports.addMaterials = (materials) => {
    let newMaterials = new Materials({
        tittle : materials.tittle ,
        price : materials.price ,
        description:materials.description ,
        state:materials.state ,
        picture:materials.picture ,
        trademark:materials.trademark,
        model : materials.model,
        category : materials.category,
        user : materials.user,
        adress : materials.adress
    });
    return new Promise((reject, resolve) => {
        newMaterials.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findMaterials = () => {

    return new Promise((reject, resolve) => {
        Materials.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findMaterialsById = (id) => {
    return new promise((reject,resolve) => {
        Materials.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateMaterials = (id, obj) => {
    return new Promise((reject, resolve) => {
        Materials.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteMaterials = (id) => {
    return new Promise((reject, resolve) => {
        materials.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};