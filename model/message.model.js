const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
      
    },
    
},{timestamps:true});
const Message = mongoose.model('Message',messageSchema);
module.exports = Message;