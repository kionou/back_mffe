const  mongoose  = require("mongoose");

const ChatSchema = new mongoose.Schema({
    abonner_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Abonner',
    },
    send_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    message:{
        type:String,
        required: true
    },
},
{ timestamps: true }
)


const Chat = mongoose.model('Chat',ChatSchema)
module.exports = Chat
