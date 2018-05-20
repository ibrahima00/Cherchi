import mongoose from 'mongoose';

const Schema = mongoose.schema;

let complaintsSchema = new Schema ({
    idSender : {type : Schema.Types.ObjectId, ref : User},
    idReciever : {type : Schema.Types.ObjectId, ref : User},
    reason : {type:String , required : true},
    complaintBody : {type : String , required : true}
});

exports.complaintsSchema = complaintsSchema;
let Complaint = mongoose.model('Complaint', complaintsSchema);
exports.ComplaintModel = Complaint;

exports.addComplaint = (complaint) => {
    let newComplaint = new Complaint({
        idSender : complaint.idSender,
        isRevciever : complaint.idReciever,
        reason : complaint.reason,
        complaintBody : complaint.complaintBody
    });
    return new Promise((reject, resolve) => {
        newComplaint.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.findComplaint = () => {

    return new Promise((reject, resolve) => {
        Complaint.find({}, (err, res) => {
            err ? reject(err) : resolve(res);
        }) ;
    });
};
exports.findComplaintById = (id) => {
    return new promise((reject,resolve) => {
        Complaint.findById(id , (err , res) =>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateComplaint = (id, obj) => {
    return new Promise((reject, resolve) => {
        Complaint.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteComplaint = (id) => {
    return new Promise((reject, resolve) => {
        Complaint.find(id).remove((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};