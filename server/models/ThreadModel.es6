import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let threadSchema = new Schema({
    /**
     * @description messages contained in a thread
     */
    messages : [{type : Schema.Types.ObjectId, ref : Message}],
    /**
     * @description users participating in a thread
     */
    participants : [{type : Schema.Types.ObjectId, ref : User}],
    /**
     * @description user that started the thread
     */
    createdBy : {type : Schema.Types.ObjectId, ref : User},
    /**
     * @description date of thread creation
     */
    createdAt : Date.now
});

exports.threadSchema = threadSchema;
let Thread = mongoose.model('Thread', threadSchema);
exports.ThreadModel = Thread;

exports.addThread = (thread) => {
    let newThread = new Thread({
        messages : thread.messages,
        participants : thread.participants,
        createdBy : thread.createdBy,
        createdAt : thread.createdAt
    });
    return new Promise((reject, resolve) => {
        newThread.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findThread = () => {

    return new Promise((reject, resolve) => {
        Thread.find({}, (err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findThreadById = (id) => {
    return new promise((reject,resolve) => {
        Thread.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteThread = (id) => {
    return new Promise((reject, resolve) => {
        Thread.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};