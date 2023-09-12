const { pass } = require("../middlewares/password")
const User = require("../models/users")


const Userdata = class{

    static InsertionUser=  (into , pass)=>{
        console.log('passss',pass);
        let image = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        const {nom,prenom,email,pseudo,numero,password,statut} = into
        return new Promise(async (next)=>{
            if (statut === 'L') {
                User.create({nom,prenom,email,pseudo,numero,password,statut ,image})
                .then(resultat=>{
                    console.log('sshhh',resultat);
                    next({success:resultat })
                }).catch(err=>{
                    console.log("eee",err);
                    next ({ erreur:err})
               })
            } else {
                let password = pass
                User.create({nom,prenom,email,pseudo,numero,password,statut ,image})
                .then(resultat=>{
                    console.log('sshhh',resultat);
                    next({success:resultat , code:pass})
                }).catch(err=>{
                    console.log("eee",err);
                    next ({ erreur:err})
               })
            }
          
        })

    }

    static UserOne= async(into) =>{ 
        return new Promise(async (next)=>{  
        await User.findOne(
            {email:into},
            // '-password'
            
            )
            .then(resultat=>{
                console.log('sseeee',resultat);
                if (resultat != null) {
                    next({success:resultat})
                    
                } else {
                    next({alert:"Email n'existe pas"})

                }
                
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static UserAll=  ()=>{
        return new Promise(async (next)=>{
            User.find({})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
    static UserbyId=  (into)=>{
        return new Promise(async (next)=>{
            User.findById({_id:into})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static UserUpdate=  (into , id )=>{
        const {nom,prenom,email,pseudo,numero,statut ,password} = into
        return new Promise(async (next)=>{
            User.findByIdAndUpdate(id,{nom,prenom,email,pseudo,numero,password,statut })
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static UserUpdatePicture=  (image, id )=>{
       
        return new Promise(async (next)=>{
            User.findByIdAndUpdate(id,{image })
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static UserDelete=  (into)=>{
       
        return new Promise(async (next)=>{
            User.findOneAndDelete({_id:into})
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


module.exports = Userdata