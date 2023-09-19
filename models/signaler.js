const  mongoose  = require("mongoose");

const signalerSchema = new mongoose.Schema({
    contenu:{
        type:String,
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    commentaire_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commentaire',
    }
},
{ timestamps: true }
)


const Signaler = mongoose.model('Signaler',signalerSchema)
module.exports = Signaler
