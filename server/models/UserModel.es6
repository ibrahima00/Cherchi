import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs'

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    role: { type : String, enum : ['particular', 'company', 'admin']},
    phoneNumber:{type:String},
    isVerified: {type: Boolean, default: false}
    },{
    timestamps : true

});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};



exports.userSchema = userSchema;
let User = mongoose.model('User', userSchema);
exports.UserModel = User;





exports.addUser = ({firstName, lastName, email, password,  isVerified ,role,phoneNumber }) => {
    let newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        isVerified: isVerified,
        role:role,
        phoneNumber: phoneNumber
    });

    newUser.password = newUser.generateHash(password);
    return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};


exports.findUser = (email) => {
    return new Promise((reject, resolve) => {
        User.findOne({email : email}, (res , err) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.findUserById = (id) => {
    return new Promise((reject, resolve) => {
        User.findById(id, (res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateUser = (id, obj) => {
    return new Promise((reject, resolve) => {
        User.findByIdAndUpdate(id, obj, (res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.deleteUser = (id) => {
    return new Promise((reject, resolve) => {
        User.findByIdAndRemove(id, (res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.updatePassword = (id , password) => {
    return new Promise((resolve,reject)=>{
        User.findByIdAndUpdate({_id: id}, {password: password},(err, res)=>{
            err ? reject (err) : resolve (res) ;
        });
    });
};