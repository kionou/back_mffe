const { request,response } = require("express");
const handlErrors = require("../middlewares/validator");
const Chatdata = require("../others/requetteChat");



const dataChat = class{
    
    static AllChat = async (req =request,res =response)=>{

        const Chat = await Chatdata.ChatAll()
        if (Chat.success) {
       
            res.status(201).json({"statut":"success" , "data":Chat.success})
        } else {
            res.status(400).json({"statut":"error" ,"data":Chat.erreur})
        }

    }

    static PostChat = async (req =request,res =response)=>{
        console.log('bobyjj',req.body);

    const Chat = await Chatdata.insertChat(req.body)
    if (Chat.success) {
       
   
        res.status(201).send({"statut":"success" ,"message":"Chat enregistrer"})
    } else {
        const error = handlErrors(Chat.erreur)
        res.status(400).json({"statut":"error" ,"alert":error})
    }

}

static GetChatbyId = async (req =request,res =response)=>{
    console.log('boby22',req.params.id);

const Chat = await Chatdata.IdbyChat(req.params.id)
if (Chat.success) {
    console.log('erzarete',Chat.success);

    res.status(201).send({"statut":"success" , "data":Chat.success})
} else {
    res.status(400).json({"statut":"error" ,"data":"le Chat exist pas"})
}



}

static DeleteChat = async (req =request,res =response)=>{
    console.log('boby',req.params.id);

const Chat = await Chatdata.ChatDelete(req.params.id)
if (Chat.success) {
    console.log('erzarete',Chat.success);

    res.status(201).send({"message":"Chat delete avec success"})
} else {
    const error = handlErrors(Chat.erreur)
    res.status(400).json({"alert":error})
}

}

static UpdateChat = async (req =request,res =response)=>{
 
const Chat = await Chatdata.ChatUpdate(req.body, req.params.id)
if (Chat.success) {
    console.log('erzarete',Chat.success);

    res.status(201).send({"message":"Chat update avec success"})
} else {
    const error = handlErrors(Chat.erreur)
    res.status(400).json({"alert":error})
}

}
   
}


module.exports = dataChat