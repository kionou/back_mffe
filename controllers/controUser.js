const { request, response } = require("express");
const Userdata = require("../others/requetteUser");
const { pass } = require("../middlewares/password")
const handlErrors = require("../middlewares/validator");
const { mailer } = require("../middlewares/mailer");
const bcrypt = require('bcrypt');
const jsonwt = require("../middlewares/jsonwebtoken");



const UserControler = class {
    static CheckUser = async (req = request, res = response) => {
        res.json({"bonjour le monde des vivants":pass()})
    
    }

   
        static UserOne = async (req = request, res = response) => {
            const user = await Userdata.UserOne(req.params.id)
            if (user.success) {
                res.status(201).json({"status":"success", "data": user.success })
            }else{
                res.status(404).json({"status":"error", "data": "page non disponible" })
            }
        
        }

    static UserSign = async (req = request, res = response) => {
        console.log('reqbody', req.body);
        const user = await Userdata.UserOne(req.body.email)
        console.log('user',user);
        if (user.alert) {
                const user = await Userdata.InsertionUser( req.body, pass() )
                console.log('ttttt',user);
                console.log('tttttuuuuuu',user.code);
                if (user.success) {
                    if (user.success.statut !== 'L') {
                     mailer(user.success.email, user.success , user.code)
                   .then(resultat => {
                    let data = {
                    pseudo:user.success.pseudo,
                    email:user.success.email,
                    password:user.code
                    } 
                    res.status(201).json({ 'statut':'success' , 'message envoyer': data })

                }).catch(err => {
                    console.log("eee", err);
                    res.status(400).json({ "error": "message non envoyer" })

                })
                        
                    } else {
                    res.status(201).json({'statut':'success' , "message": 'compte creer avec success lambda' })
                    }
                } else {
                    console.log('ededede', user.erreur);
                    const error = handlErrors(user.erreur)
                    res.status(400).json({ "alert": error })
                }
           
        } else if (user.success) {
            res.status(201).json({ 'statut':'error' ,'alert': 'L\'adresse Email existe deja , veuillez-vous connectés ! ' })
        }

    }
    static Login = async (req = request, res = response) => {

        const user = await Userdata.UserOne(req.body.email)
        if (user.success) {
            let userdata={
                id:user.success._id,
                nom:user.success.nom,
                prenom:user.success.prenom,
                email:user.success.email, 
                statut:user.success.statut
                }
            const auth = await bcrypt.compare(req.body.password, user.success.password)
            if (auth) {
              
                const token = jsonwt.CreerToken( user.success._id ,'30d')
                res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 })
                res.status(201).json({'statut':'success' ,"token": token , "user":userdata })

            } else {
                res.status(201).json({ 'statut':'error' ,"alert": "Mot de pase incorrect" })

            }
        } else if (user.alert) {
            res.status(201).json({'statut':'error' , "alert": "Email ou le mot de passe est incoorect !" })

        } else {

            console.log('ededede', user.erreur);
            const error = handlErrors(user.erreur)
            res.status(400).json({ "alert": error })
        }


    }

    static UserAll = async (req = request, res = response) => {
        const user = await Userdata.UserAll( )
        if (user.success) {
            res.status(201).json({"status":"success", "data": user.success })
        }else{
            res.status(404).json({ "error": "page non disponible" })
        }
    
    }

    static UpdateUser = async (req = request, res = response) => {
        console.log('userupate',req.body , req.params.id);
        if (req.body.new_password) {
            const user = await Userdata.UserbyId(req.params.id)   
            if (user.success) {
                const auth = await bcrypt.compare(req.body.password, user.success.password)
                    if (auth) {
                        let password =   bcrypt.hashSync(req.body.new_password, 10);
                        req.body.password = password;
                        const user = await Userdata.UserUpdate(req.body, req.params.id)
                           if (user.success) {
                              res.status(201).send({ 'statut':'success' , 'message ': 'user update avec success' })
                           } else {
                                console.log('ededede', user.erreur);
                                const error = handlErrors(user.erreur)
                                res.status(400).json({'statut':'error' , "message": error })
                           }
    
                    } else {
                    
    
                }
            }
        } else {
            const user = await Userdata.UserUpdate(req.body, req.params.id)
            if (user.success) {
               res.status(201).send({ 'statut':'success' , 'message ': 'user update avec success' })
            } else {
                 console.log('ededede', user.erreur);
                 const error = handlErrors(user.erreur)
                 res.status(400).json({'statut':'error' , "message": error })
            }
        }
          

    }
    static UpdateUserPicture = async (req = request, res = response) => {
    console.log('UUUU',req.file);
    const user = await Userdata.UserUpdatePicture(req.file.path, req.params.id)
    if (user.success) {
       res.status(201).send({ "message": "picture user update avec success" })
    } else {
         console.log('ededede', user.erreur);
         const error = handlErrors(user.erreur)
         res.status(400).json({ "alert": error })
    }
    
    }

    static DeleteUser = async (req = request, res = response) => {


        const user = await Userdata.UserDelete(req.params.id)
        if (user.success) {

            res.status(201).send({ "message": "user delete avec success" })
        } else {
            console.log('ededede', user.erreur);
            const error = handlErrors(user.erreur)
            res.status(400).json({ "alert": error })
        }

    }

    static Logout = async (req = request, res = response) => {
        res.cookie('jwt', '', { maxAge: 1 })
        res.status(201).send({ "message": "user deconnecter avec success" })

    }

}



module.exports = UserControler