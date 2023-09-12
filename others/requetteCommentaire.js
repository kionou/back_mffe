const Commentaire = require("../models/commentaire")




const Commentairedata = class{

    static CommentaireAll=  ()=>{
        return new Promise(async (next)=>{
           Commentaire.find({})
           .populate('sujet_id','_id titre')
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
   
    static insertCommentaire=  (into )=>{
       
        const {contenu,statut,user_id,sujet_id} = into
        return new Promise(async (next)=>{
           Commentaire.create({contenu,statut,user_id,sujet_id})
            .then(resultat=>{
                console.log('ss',resultat); 
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static IdbyCommentaire =  (into)=>{
        console.log('into',into);
        return new Promise(async (next)=>{
          await Commentaire.findById({_id:into})
          .populate('sujet_id','_id titre')
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

    static CommentaireDelete=  (into)=>{
       
        return new Promise(async (next)=>{
           Commentaire.findOneAndDelete({_id:into})
            .then(resultat=>{
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static CommentaireUpdate=  (into , id)=>{

        const {contenu,statut,user_id,sujet_id} = into
        return new Promise(async (next)=>{
           Commentaire.findByIdAndUpdate(id,{contenu,statut,user_id,sujet_id})
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

 


module.exports = Commentairedata