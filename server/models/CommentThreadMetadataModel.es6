import mongoose from 'mongoose' ;

const Schema = mongoose.Schema ;
const ctMetadataSchema = new Schema ({
    thread : [{type : Schema.Types.ObjectId , ref : 'commentThread'}]
});

exports.ctMetadataSchema = ctMetadataSchema ;
let ctMetadata =mongoose.model('commentThreadMetadata',ctMetadataSchema);
exports.CommentThreadMetadataModel = ctMetadata ;

const addCommentThreadMetadata =(ct)=>{
    let newCommentThreadMetadata = ctMetadata ({
        thread: ct.thread
    });
    return new Promise(resolve ,reject =>{
        newCommentThreadMetadata.save((res,err)=>{
            err ? reject(err) : resolve(res);
        });
    });
};

exports.findCommentThreadMetadata =()=>{
    return new Promise((resolve, reject) => {
        ctMetadata.find({},(res , err) =>{
            err ? reject(err) : resolve(res);
        })
    })
};
exports.findCommentThreadmetadataById=(id)=> {
    return new Promise((resolve, reject) => {
        ctMetadata.findById(id, (res , err) => {
            err ? reject(err) : resolve(res);
        });
    });
};

exports.updateCommentThreadMetadata=((id)=>{
    return new Promise((reject,resolve)=>{
        ctMetadata.findByIdAndUpdate(id,(res,err)=>{
            err ? reject(err) : resolve(res);
        });
    });
});
exports.deleateCommentThreadMetadata=((id)=>{
    return new Promise((reject,resolve)=>{
        ctMetadata.find(id).remove((res,err)=>{
            err ? reject(err) : resolve(res);
        });
    });
});
