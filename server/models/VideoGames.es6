import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let videogamesSchema = new Schema({
    tittle : {type : String},
    price : {type : Number},
    description:{type : String},
    picture:{type : String},
    state : {type: String},
    model :{ type :[String]}, //ps3 , ps4 , xbox
    category : [{type : Schema.Types.ObjectID, ref : 'Category'}],
    user : [{type : Schema.Types.ObjectID, ref : 'User'}],
    adress : [{type : Schema.Types.ObjectID, ref : 'Adress'}]
});

exports.videogamesSchema = videogamesSchema;
let VideoGames = mongoose.model('VideoGames', videogamesSchema);
exports.VideoGamesModel = VideoGames;

exports.addVideoGames = (videogames) => {
    let newVideoGames = new VideoGames({
        tittle : videogames.tittle ,
        price : videogames.price ,
        description:videogames.description ,
        state:videogames.state ,
        picture:videogames.picture ,
        model : videogames.model ,
        category : videogames.category,
        user : videogames.user,
        adress : videogames.adress
    });
    return new Promise((reject, resolve) => {
        newVideoGames.save((err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findVideoGames = () => {

    return new Promise((reject, resolve) => {
        VideoGames.find({})
            .populate('category')
            .populate("user")
            .populate("adress")
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findVideoGamesById = (id) => {
    return new promise((reject,resolve) => {
        VideoGames.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateVideoGames = (id, obj) => {
    return new Promise((reject, resolve) => {
        GameConsole.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteVideoGames = (id) => {
    return new Promise((reject, resolve) => {
        VideoGames.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};