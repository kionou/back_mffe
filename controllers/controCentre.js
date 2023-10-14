const { request,response } = require("express");
const handlErrors = require("../middlewares/validator");
const Centredata = require("../others/requetteCentre");






const dataCentre = class{
    
    static AllCentre = async (req =request,res =response)=>{

        const Centre = await Centredata.CentrerAll()
        if (Centre.success) {
       
            res.status(201).json({"statut":"success" , "data":Centre.success})
        } else {
            res.status(400).json({"statut":"error" ,"data":Centre.erreur})
        }

    }

    static PostCentre = async (req =request,res =response)=>{
        console.log('bobyjj',req.body);

    const Centre = await Centredata.insertCentre(req.body)
    if (Centre.success) {
       
   
        res.status(201).send({"statut":"success" ,"message":"Centre enregistrer"})
    } else {
        const error = handlErrors(Centre.erreur)
        res.status(400).json({"statut":"error" ,"alert":error})
    }

}

static GetCentrebyId = async (req =request,res =response)=>{
    console.log('boby22',req.params.id);

const Centre = await Centredata.IdbyCentre(req.params.id)
if (Centre.success) {
    console.log('erzarete',Centre.success);

    res.status(201).send({"statut":"success" , "data":Centre.success})
} else {
    res.status(400).json({"statut":"error" ,"data":"le centre exist pas"})
}



}

static DeleteCentre = async (req =request,res =response)=>{
    console.log('boby',req.params.id);

const Centre = await Centredata.CentreDelete(req.params.id)
if (Centre.success) {
    console.log('erzarete',Centre.success);
    res.status(201).send({"statut":"success" ,"message":"centre delete avec success "})

   
} else {
    const error = handlErrors(Centre.erreur)
    res.status(400).json({"alert":error})
}

}

static UpdateCentre = async (req =request,res =response)=>{
 
const Centre = await Centredata.CentreUpdate(req.body, req.params.id)
if (Centre.success) {
    console.log('erzarete',Centre.success);

    res.status(201).send({"statut":"success" ,"message":"Centre "})
} else {
    const error = handlErrors(Centre.erreur)
    res.status(400).json({"statut":"error" ,"alert":error})
}

}
   
}

 


module.exports = dataCentre