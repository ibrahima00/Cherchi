import mongoose from 'mongoose';


const warningSchema = new mongoose.Schema ({
    IDsender :{type :Schema.types.objectID , ref : 'Admin'},
    idReciever :{type :Schema.types.objectID , ref : 'User'},
    body : {type : String , required : true}
});
exports.warningSchema = warningSchema;
let Warning = mongoose.model('Warning', warningSchema);
exports.WarningModel = Warning;



exports.addWarning = (warning) => {
    let newWarning = new Warning({
        idSender: warning.idSender,
        idReciever: warning.idReciever,
        body: warning.body

    });

    return new Promise((resolve, reject) => {
        newWarning.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findWarning = () => {

    return new Promise((reject, resolve) => {
        Warning.find({}, (err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findWarningById = (id) => {
    return new promise((reject,resolve) => {
        Warning.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateWarning = (id, obj) => {
    return new Promise((reject, resolve) => {
        Warning.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteWarning = (id) => {
    return new Promise((reject, resolve) => {
        Warning.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};