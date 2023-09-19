const { request,response } = require("express");
const handlErrors = require("../middlewares/validator");
const Abonnerdata = require("../others/requetteAbonner");


const dataAbonner = class{
    
    static AllAbonner = async (req =request,res =response)=>{

        const Abonner = await Abonnerdata.AbonnerAll()
        if (Abonner.success) {
       
            res.status(201).json({"statut":"success" , "data":Abonner.success})
        } else {
            res.status(400).json({"statut":"error" ,"data":Abonner.erreur})
        }

    }

    static PostAbonner = async (req =request,res =response)=>{
        console.log('bobyjj',req.body);

    const Abonner = await Abonnerdata.insertAbonner(req.body)
    if (Abonner.success) {
       
   
        res.status(201).send({"statut":"success" ,"message":"Abonner enregistrer"})
    } else {
        const error = handlErrors(Abonner.erreur)
        res.status(400).json({"statut":"error" ,"alert":error})
    }

}

static GetAbonnerbyId = async (req =request,res =response)=>{
    console.log('boby22',req.params.id);

const Abonner = await Abonnerdata.IdbyAbonner(req.params.id)
if (Abonner.success) {
    console.log('erzarete',Abonner.success);

    res.status(201).send({"statut":"success" , "data":Abonner.success})
} else {
    res.status(400).json({"statut":"error" ,"data":"le Abonner exist pas"})
}



}

static DeleteAbonner = async (req =request,res =response)=>{
    console.log('boby',req.params.id);

const Abonner = await Abonnerdata.AbonnerDelete(req.params.id)
if (Abonner.success) {
    console.log('erzarete',Abonner.success);

    res.status(201).send({"message":"Abonner delete avec success"})
} else {
    const error = handlErrors(Abonner.erreur)
    res.status(400).json({"alert":error})
}

}

static UpdateAbonner = async (req =request,res =response)=>{
 
const Abonner = await Abonnerdata.AbonnerUpdate(req.body, req.params.id)
if (Abonner.success) {
    console.log('erzarete',Abonner.success);

    res.status(201).send({"message":"Abonner update avec success"})
} else {
    const error = handlErrors(Abonner.erreur)
    res.status(400).json({"alert":error})
}

}
   
}


module.exports = dataAbonner