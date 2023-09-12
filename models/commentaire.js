const  mongoose  = require("mongoose");


const commentaireSchema = new mongoose.Schema({
    contenu:{
        type:String,
        required: true

    },
    statut:{
        type:Boolean,
        default: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      sujet_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sujet',
      },
  

},
{ timestamps: true }
)






const Commentaire = mongoose.model('Commentaire',commentaireSchema)
module.exports = Commentaire
