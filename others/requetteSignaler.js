const Signaler = require("../models/signaler")



const Signalerdata = class{

    static SignalerAll =  ()=>{
        return new Promise(async (next)=>{
           Signaler.find({})
           .populate('commentaire_id','_id contenu')
           .populate('user_id','nom prenom image')
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
   
    static insertSignaler=  (into )=>{
       
        const {contenu,user_id,commentaire_id} = into
        return new Promise(async (next)=>{
           Signaler.create({contenu,user_id,commentaire_id})
            .then(resultat=>{
                console.log('ss',resultat); 
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static IdbySignaler =  (into)=>{
        console.log('into',into);
        return new Promise(async (next)=>{
          await Signaler.findById({_id:into})
          .populate('commentaire_id','_id contenu')
           .populate('user_id','nom prenom image')
            .then(resultat=>{
                console.log('ssnn',resultat);
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static SignalerDelete=  (into)=>{
       
        return new Promise(async (next)=>{
           Signaler.findOneAndDelete({_id:into})
            .then(resultat=>{
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static SignalerUpdate=  (into , id)=>{

        const {contenu,user_id,commentaire_id} = into
        return new Promise(async (next)=>{
           Signaler.findByIdAndUpdate(id,{contenu,user_id,commentaire_id})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
}

 


module.exports = Signalerdata