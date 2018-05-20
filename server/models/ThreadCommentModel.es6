import mongoose from 'mongoose' ;

const Schema = mongoose.Schema ;
const commentThreadSchema = new Schema ({
    comment : {type: Schema.Types.ObjectId , ref : 'Comment'},
    participants : [{type : Schema.Types.ObjectId , ref : 'User'}]
},{
    timestamp : true
});
exports.commentThreadSchema = commentThreadSchema ;
let commentThread = mongoose.model('commentThread', commentThreadSchema);
exports.commentThreadModel = commentThread ;
/**
 * ct = commentthread
 */
exports.addCommentthread =(ct)=>{
   let newCommentThread =new commentThread ({
       comment:ct.comment ,
       participants:ct.participants
    });
   return new Promise((resolve, reject) =>{
    newCommentThread.save((res , err)=>{
        err ? reject(err) : resolve(res);
    });
   });
};
exports.findCommentThread =()=>{
  return new Promise((resolve, reject) => {
    commentThread.find({},(res , err) =>{
        err ? reject(err) : resolve(res);
    })
  })
};
exports.findCommentThreadById=(id)=> {
    return new Promise((resolve, reject) => {
        commentThread.findById(id, (res , err) => {
            err ? reject(err) : resolve(res);
        });
    });
};
