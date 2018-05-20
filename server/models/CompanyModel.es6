import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({

        entitled: String,
        email: {type: String},
        password: {type: String},
        role: { type : String, enum : [ 'company']},
        taxRegisterNumber: String
        , webSite: String
        , taxStatus: String
        , logo :String
        , type :String
        ,description: String
        , adress: {type : mongoose.Schema.Types.ObjectId, ref : 'Adress'}
});


exports.companySchema = companySchema;
let Company = mongoose.model('Company', companySchema);
exports.CompanyModel = Company;

exports.AddCompany = (company) => {

   let newCompany = new Company({

       entitled: company.entitled,
       email: company.email,
       password:company.password,
       role:company.role,
       taxRegisterNumber: company.taxRegisterNumber,
       webSite: company.webSite,
       taxStatus: company.taxStatus,
       logo: company.logo,
       type: company.type,
       description: company.description,
       adress: company.adress
   });

       return new Promise((resolve, reject) => {
           newCompany.save((err, res) => {
               err ? reject(err) : resolve(res);
           });
       });
};
exports.findCompany = () => {
    return new Promise((reject, resolve) => {
        Company.find({})
            .populate("adress")
            .exec( (res , err) => {
                err ? reject(err) : resolve(res);
            });
    });
};
exports.findById = (id) => {
    return new Promise((resolve,reject)=>{
        company.findById(id,(err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};
exports.updateCompany=(id,obj)=> {
    return new Promise((reject, resolve) => {
        company.findByIdAndUpdate(id, obj, (err, res) => {
            err ? reject(err) : resolve(res);
        });

    });
};

exports.deleteCompany = (id) => {
    return new Promise((reject, resolve) => {
        company.find(id).remove((res, err) => {
            err ? reject(err) : resolve(res);
        });
    });
};

