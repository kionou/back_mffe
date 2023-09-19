const { request,response } = require("express");
const handlErrors = require("../middlewares/validator");
const Commentairedata = require("../others/requetteCommentaire");



const dataCommentaire = class{
    
    static AllCommentaire  = async (req =request,res =response)=>{

        const Commentaire  = await Commentairedata.CommentaireAll()
        if (Commentaire.success) {
            console.log('commentare',Commentaire.success);
       
            res.status(201).json({"statut":"success" , "data":Commentaire .success})
        } else {
            res.status(400).json({"statut":"error" ,"data":Commentaire .erreur})
        }

    }

    static PostCommentaire  = async (req =request,res =response)=>{
        console.log('bobyjj',req.body);

    const Commentaire  = await Commentairedata.insertCommentaire (req.body)
    if (Commentaire .success) {
       
   
        res.status(201).send({"statut":"success" , "data":'Commentaire  postulé'})
    } else {
        const error = handlErrors(Commentaire .erreur)
        res.status(400).json({"statut":"error" ,"data":"erreur d'envoi"})
    }

}

static GetCommentairebyId = async (req =request,res =response)=>{
    console.log('boby22',req.params.id);

const Commentaire  = await Commentairedata.IdbyCommentaire (req.params.id)
if (Commentaire .success) {
    console.log('erzarete',Commentaire .success);

    res.status(201).send({"statut":"success" , "data":Commentaire .success})
} else {
    const error = handlErrors(Commentaire .erreur)
    res.status(400).json({"statut":"error" ,"data":Commentaire .erreur})
}



}

static DeleteCommentaire  = async (req =request,res =response)=>{
    console.log('boby',req.params.id);

const Commentaire  = await Commentairedata.CommentaireDelete(req.params.id)
if (Commentaire .success) {
    console.log('erzarete',Commentaire .success);

    res.status(201).send({"message":"Commentaire  delete avec success"})
} else {
    const error = handlErrors(Commentaire .erreur)
    res.status(400).json({"alert":error})
}

}

static UpdateCommentaire  = async (req =request,res =response)=>{
    console.log('boby',req.params.id);
    console.log('boby',req.body);


const Commentaire  = await Commentairedata.CommentaireUpdate(req.body, req.params.id)
if (Commentaire .success) {
    console.log('erzarete',Commentaire .success);

    res.status(201).send({"statut":"success" , "data":'update Commentaire .success'})
} else {
    const error = handlErrors(Commentaire .erreur)
    res.status(400).json({"statut":"error" ,"data":Commentaire .erreur})
}



}


   
}

 


module.exports = dataCommentaire