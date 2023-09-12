const Centre = require("../models/centre_interet")


const Centredata = class{

    static CentrerAll=  ()=>{
        return new Promise(async (next)=>{
           Centre.find({})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
   
    static insertCentre=  (into )=>{
       
        const {nom} = into
        return new Promise(async (next)=>{
           Centre.create({nom})
            .then(resultat=>{
                console.log('ss',resultat); 
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static IdbyCentre =  (into)=>{
        console.log('into',into);
        return new Promise(async (next)=>{
          await Centre.findById({_id:into})
            .then(resultat=>{
                console.log('ssnn',resultat);
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static CentreDelete=  (into)=>{
       
        return new Promise(async (next)=>{
           Centre.findOneAndDelete({_id:into})
            .then(resultat=>{
                next({success:resultat}) 
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static CentreUpdate=  (into , id)=>{

        const {nom} = into
        return new Promise(async (next)=>{
           Centre.findByIdAndUpdate(id,{nom})
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

 


module.exports = Centredata