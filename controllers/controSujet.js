const { request,response } = require("express");
const handlErrors = require("../middlewares/validator");
const Sujetdata = require("../others/requetteSujet");


const dataSujet = class{
    
    static AllSujet = async (req =request,res =response)=>{

        const Sujet = await Sujetdata.SujetrAll()
        if (Sujet.success) {
       
            res.status(201).json({"statut":"success" , "data":Sujet.success})
        } else {
            res.status(400).json({"statut":"error" ,"data":Sujet.erreur})
        }

    }

    static PostSujet = async (req =request,res =response)=>{
        console.log('bobyjj',req.body);

    const Sujet = await Sujetdata.insertSujet(req.body)
    if (Sujet.success) {
       
   
        res.status(201).send({"statut":"success" , "data":'Sujet postulé'})
    } else {
        const error = handlErrors(Sujet.erreur)
        res.status(400).json({"statut":"error" ,"data":"erreur d'envoi"})
    }

}

static GetSujetbyId = async (req =request,res =response)=>{
    console.log('boby22',req.params.id);

const Sujet = await Sujetdata.IdbySujet(req.params.id)
if (Sujet.success) {
    console.log('erzarete',Sujet.success);

    res.status(201).send({"statut":"success" , "data":Sujet.success})
} else {
    const error = handlErrors(Sujet.erreur)
    res.status(400).json({"statut":"error" ,"data":Sujet.erreur})
}



}

static DeleteSujet = async (req =request,res =response)=>{
    console.log('boby',req.params.id);

const Sujet = await Sujetdata.SujetDelete(req.params.id)
if (Sujet.success) {
    console.log('erzarete',Sujet.success);

    res.status(201).send({"message":"sujet delete avec success"})
} else {
    const error = handlErrors(Sujet.erreur)
    res.status(400).json({"alert":error})
}

}

static UpdateSujet = async (req =request,res =response)=>{
    console.log('boby',req.params.id);
    console.log('boby',req.body);


const Sujet = await Sujetdata.SujetUpdate(req.body, req.params.id)
if (Sujet.success) {
    console.log('erzarete',Sujet.success);

    res.status(201).send({"statut":"success" , "data":'update Sujet.success'})
} else {
    const error = handlErrors(Sujet.erreur)
    res.status(400).json({"statut":"error" ,"data":Sujet.erreur})
}



}


   
}

 


module.exports = dataSujet