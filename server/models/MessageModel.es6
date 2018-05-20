import mongoose from 'mongoose';

const Schema = mongoose.schema;

let messageSchema = new Schema({

    idSender : {type : Schema.Types.ObjectId, ref : User},
    idReciever : {type : Schema.Types.ObjectId, ref : User},
    messageBody : {type : String ,  required : true},
    createdAt : Date.now,
    
});

exports.messageSchema = messageSchema;
let Message = mongoose.model('Message', messageSchema);
exports.MessageModel = Message;

exports.addMessage = (message) => {
    let newMessage = new Message({
        idSender : message.idSender,
        idREciever : message.idReciever,
        messageBody : message.messageBody,
        createdAt : message.createdAt
    });
    return new Promise((reject, resolve) => {
        newMessage.sav((err, res) => {
            err? reject(err) : resolve(res);
        });
    });
};
exports.findMessage = () => {

    return new Promise((reject, resolve) => {
        Message.find({}, (err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findMessageById = (id) => {
    return new promise((reject,resolve) => {
        Message.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteMessage = (id) => {
    return new Promise((reject, resolve) => {
        Message.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};