import mongoose from 'mongoose';

const Schema = mongoose.Schema ;
const commentSchema = new Schema({
   idUser : {type : Schema.Types.ObjectId , ref :'User'},
    body : {type : String , required : true},
    thread : {type : Schema.Types.ObjectId , ref :'threadComment'}
});
exports.commentSchema =commentSchema ;
let Comment = mongoose.model('Comment',commentSchema);
exports.CommentModel = Comment ;


exports.addComment =(addcomment)=>{
    let newComment = Comment ({
        idSender : addcomment.idSender ,
        body: addcomment.body ,
        thread : addcomment.thread
    });
    return new Promise((reject ,resolve)=>{
    newComment.save((res , err)=>{
       err ? reject(err) : resolve(res);
    });
});
};
exports.findCommentById=((id)=>{
    return new Promise((reject , resolve)=>{
       newComment.findById(id,(res , err)=>{
            err ? reject(err) : resolve(res)
       });
    });
});
exports.updateComment=((id)=>{
    return new Promise((reject,resolve)=>{
        Comment.findByIdAndUpdate(id,(res , err)=>{
            err ? reject(err) : resolve(res);
        });
    });
});
exports.deleteComment= (id) => {
    return new Promise((reject,resolve)=>{
        Comment.find(id).remove((res , err)=>{
            err ? reject(err) : resolve(res);
        });
    });
};


