const Abonner = require("../models/abonner")





const Abonnerdata = class{

    static AbonnerAll =  ()=>{
        return new Promise(async (next)=>{
           Abonner.find({})
           .populate('lambda_id','nom prenom image')
           .populate('influente_id','nom prenom image')
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
   
    static insertAbonner=  (into )=>{
       
        const {statut,lambda_id,influente_id} = into
        return new Promise(async (next)=>{
           Abonner.create({statut,lambda_id,influente_id})
            .then(resultat=>{
                console.log('ss',resultat); 
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static IdbyAbonner =  (into)=>{
        console.log('into',into);
        return new Promise(async (next)=>{
          await Abonner.findById({_id:into})
          .populate('lambda_id','nom prenom image')
          .populate('influente_id','nom prenom image')
            .then(resultat=>{
                console.log('ssnn',resultat);
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static AbonnerDelete=  (into)=>{
       
        return new Promise(async (next)=>{
           Abonner.findOneAndDelete({_id:into})
            .then(resultat=>{
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static AbonnerUpdate=  (into , id)=>{

        const {statut,lambda_id,influente_id} = into
        return new Promise(async (next)=>{
           Abonner.findByIdAndUpdate(id,{statut,lambda_id,influente_id})
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

 


module.exports = Abonnerdata