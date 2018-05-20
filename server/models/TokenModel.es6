import mongoose from 'mongoose';


const TokenSchema = new mongoose.Schema({
    userId: {type : mongoose.Schema.Types.ObjectId, ref:'User'},
    token: String,
    createdAT: {type : Date  ,default : Date.now , expires : 900}

});

exports.TokenSchema = TokenSchema;
let Token = mongoose.model('token', TokenSchema);
exports.TokenModel = Token ;
/**
 *
 */
exports.addToken = ({userId,token })=> {
    const newToken = new Token({
        userId: userId,
        token:token
});
    return new Promise((resolve, reject) => {
        newToken.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.findTokenById = (id) => {
    return new Promise((resolve, reject) => {
        Token.findById({_id: id})
            .populate('userId')
            .exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
    });
};


