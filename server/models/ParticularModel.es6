import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const particularSchema = new Schema({
    gender : {type : String},
    picture : {type : String},
    situation: {type : String},
    age : {type : String },
    user : {type : Schema.Types.ObjectId, ref : 'User'},
    adress : {type : Schema.Types.ObjectId, ref : 'Adress'}

});

exports.particularSchema = particularSchema;
let Particular = mongoose.model('Particular', particularSchema);
exports.ParticularModel = Particular;

exports.addParticular = ({gender, picture, situation, age,  user, adress,}) => {
    let newParticular = new Particular({
        gender : gender,
        picture: picture,
        situation : situation,
        age : age,
        user : user,
        adress : adress
    });
    return new Promise((resolve, reject) => {
        newParticular.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findParticular = () => {

    return new Promise((reject, resolve) => {
        Particular.find({})
            .populate('user')
            .populate('adress')
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
            });
};
exports.findParticularById = (id) => {
    return new promise((reject,resolve) => {
        Particular.findById( id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateParticular = (id, obj) => {
    return new Promise((reject, resolve) => {
        Particular.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteParticular = (id) => {
    return new Promise((reject, resolve) => {
        Particular.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};