import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    domain : {type:String , requireed : true },
    state : {type: Boolean , required : true},
    waitingAds :{type:Number , required:true },
    numberWaitingAds :{type:Number ,required:true},
    refusedAds :{type:Array , required:true},
    numberRefusedAds :{type:Array , required:true},
    confirmedAds:{type:Number , required:true},
    numberConfirmedAds: {type:Array , required:true},
    refusedAccount: {type:Number , required:true},
    numberRefusedAccount:{type:Array , required:true},
    refusedCompany : {type:Number},
    numberRefusedCompany:{type:Number},
    numberOfComplaintsSent:{type:Number},
    adress:{type:Schema.Types.ObjectId, ref :'Adress'},
    user : {type : Schema.Types.ObjectId, ref : 'User'}
});
exports.adminSchema = adminSchema;
let Admin = mongoose.model('Admin', 'adminSchema');
exports.AdminModel = Admin;

exports.addAdmin = (admin) => {
   let newAdmin = new Admin({
       domain : admin.domain ,
       state : admin.state ,
       waitingAds :admin.waitingAds,
       numberWaitingAds :admin.numberWaitingAds,
       refusedAds : admin.refusedAds ,
       numberRefusedAds : admin.numberRefusedAds ,
       confirmedAds: admin.confirmedAds ,
       numberConfirmedAds : admin.numberConfirmedAds ,
       refusedAccount: admin.refusedAccount ,
       numberRefusedAccount : admin.numberRefusedAccount ,
       refusedCompany: admin.refusedCompany,
       numberRefusedCompany: admin.numberRefusedCompany,
       numberOfComplaintsSent:admin.numberOfComplaintsSent ,
       user: admin.user,
       adress:admin.adress
   });
    return new Promise((resolve, reject) => {
        newAdmin.save((res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
    };



exports.findAdmin = () => {
    return new Promise((reject, resolve) => {
        Admin.find({})
            .populate("user")
            .populate("adress")
            .exec((err , res) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findAdminById = (id) => {
    return new promise((reject,resolve) => {
        Admin.findById(id , (res , err) =>{
            err ? reject(err) : resolve(res);
        });
    });
};


exports.updateAdmin = (id, obj) => {
    return new Promise((reject, resolve) => {
        Admin.findByIdAndUpdate(id, obj, (res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteAdmin = (id) => {
    return new Promise((reject, resolve) => {
        Admin.find(id).remove((res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};
