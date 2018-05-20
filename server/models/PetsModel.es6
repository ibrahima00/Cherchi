import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const petsSchema = new mongoose.Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    picture:{type : String},
    type :{type : String , required : true},
    gender :{type : String , required : true},
    breed :{type : String , required : true},
    age :{type : Number , required : true},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.petsSchema =petsSchema ;
let Pets =mongoose.model('Pets', petsSchema);
exports.PetsModel =Pets ;

exports.addPets =(pets)=> {
    let newPets = new Pets({
        tittle : pets.tittle ,
        price : pets.price ,
        description:pets.description ,
        picture:pets.picture ,
        type: pets.type,
        gender: pets.gender,
        breed: pets.breed,
        age: pets.age,
        category : pets.category,
        user : pets.user,
        adress : pets.adress
    });

    return new Promise((resolve, reject) => {
        newPets.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findPets = () => {

    return new Promise((reject, resolve) => {
        Pets.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            }) ;
    });
};
exports.findPetsById = (id) => {
    return new Promise((reject,resolve) => {
        Pets.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updatePets = (id, obj) => {
    return new Promise((reject, resolve) => {
        Pets.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deletePets = (id) => {
    return new Promise((reject, resolve) => {
        Pets.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};