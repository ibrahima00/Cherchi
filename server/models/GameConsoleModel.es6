import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let gameconsoleSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    state:{type : String},
    picture:{type : String},
    trademark : {type : String , required : true},
    type :{ type :String},
    model :{ type :String},
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.gameconsoleSchema = gameconsoleSchema;
let GameConsole = mongoose.model('GameConsole', gameconsoleSchema);
exports.GameConsoleModel = GameConsole;

exports.addGameConsole = (gameconsole) => {
    let newGameConsole = new GameConsole({
        tittle : gameconsole.tittle ,
        price : gameconsole.price ,
        description:gameconsole.description ,
        state:gameconsole.state ,
        picture:gameconsole.picture ,
        trademark : gameconsole.trademark ,
        type : gameconsole.type,
        model : gameconsole.model ,
        category : gameconsole.category,
        user : gameconsole.user,
        adress : gameconsole.adress
    });
    return new Promise((reject, resolve) => {
        newGameConsole.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findGameConsole = () => {

    return new Promise((reject, resolve) => {
        GameConsole.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findPhonesById = (id) => {
    return new promise((reject,resolve) => {
        GameConsole.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateGameConsole = (id, obj) => {
    return new Promise((reject, resolve) => {
        GameConsole.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteGameConsole = (id) => {
    return new Promise((reject, resolve) => {
        GameConsole.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};