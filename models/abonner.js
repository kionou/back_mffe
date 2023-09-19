const  mongoose  = require("mongoose");

const AbonnerSchema = new mongoose.Schema({
    statut:{
        type:Boolean,
        default: true,
    },
    lambda_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      influente_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
},
{ timestamps: true }
)


const Abonner = mongoose.model('Abonner',AbonnerSchema)
module.exports = Abonner
