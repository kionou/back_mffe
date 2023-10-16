const Sujet = require("../models/sujet")



const Sujetdata = class{

    static SujetrAll=  ()=>{
        return new Promise(async (next)=>{
            Sujet.find({})
            .populate('centre_id','nom')
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
   
    static insertSujet=  (into )=>{
       
        const {titre,contenu,statut,user_id,centre_id , autreCentre} = into
        return new Promise(async (next)=>{
            Sujet.create({titre,contenu,statut,user_id,centre_id , autreCentre})
            .then(resultat=>{
                console.log('ss',resultat); 
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static IdbySujet=  (into)=>{
        console.log('into',into);
        return new Promise(async (next)=>{
          await  Sujet.findById({_id:into})
                 .populate('centre_id','nom')
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

    static SujetDelete=  (into)=>{
       
        return new Promise(async (next)=>{
            Sujet.findOneAndDelete({_id:into})
            .then(resultat=>{
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static SujetUpdate=  (into , id)=>{

        const {titre,contenu,statut,user_id,centre_id, autreCentre} = into
        return new Promise(async (next)=>{
            Sujet.findByIdAndUpdate(id,{titre,contenu,statut,user_id,centre_id , autreCentre})
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

 


module.exports = Sujetdata