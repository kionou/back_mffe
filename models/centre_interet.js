const  mongoose  = require("mongoose");


const CentreSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true

    },
   
},
{ timestamps: true }
)


const Centre = mongoose.model('Centre',CentreSchema)
module.exports = Centre