const  mongoose  = require("mongoose");


const sujetSchema = new mongoose.Schema({
    titre:{
        type:String,
        required:true

    },
    contenu:{
        type:String,
        required: true

    },
    statut:{
        type:String,
        // required: true,
        default: null,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      centre_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Centre',
      },
  

},
{ timestamps: true }
)






const Sujet = mongoose.model('Sujet',sujetSchema)
module.exports = Sujet