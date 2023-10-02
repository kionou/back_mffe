const Chat = require("../models/chat")

const Chatdata = class{

    static ChatAll =  ()=>{
        return new Promise(async (next)=>{
           Chat.find({})
           .populate('abonner_id','lambda_id influente_id ')
           .populate('send_id','nom prenom image')
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
   
    static insertChat=  (into )=>{
       
        const {abonner_id,send_id,message} = into
        return new Promise(async (next)=>{
           Chat.create({abonner_id,send_id,message})
            .then(resultat=>{
                console.log('ss',resultat); 
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static IdbyChat =  (into)=>{
        console.log('into',into);
        return new Promise(async (next)=>{
          await Chat.findById({_id:into})
          .populate('abonner_id','lambda_id influente_id ')
          .populate('send_id','nom prenom image')
            .then(resultat=>{
                console.log('ssnn',resultat);
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static ChatDelete=  (into)=>{
       
        return new Promise(async (next)=>{
           Chat.findOneAndDelete({_id:into})
            .then(resultat=>{
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static ChatUpdate=  (into , id)=>{

        const {abonner_id,send_id,message} = into
        return new Promise(async (next)=>{
           Chat.findByIdAndUpdate(id,{abonner_id,send_id,message})
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

 


module.exports = Chatdata