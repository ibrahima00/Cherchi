import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageThreadMetadataSchema = new Schema({
    messageThread : {type : Schema.Types.ObjectId, ref : 'messageThread'}
});

exports.messageThreadMetadataSchema = messageThreadMetadataSchema;
let messageThreadMetadata = mongoose.model('messageThreadMetadata', messageThreadMetadataSchema);
exports.ThreadMetadataModel = ThreadMetadata;