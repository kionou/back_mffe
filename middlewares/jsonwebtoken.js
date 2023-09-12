const jwt = require('jsonwebtoken');
const Userdata = require('../others/requetteUser');

require('dotenv').config()
const jsonwt = class {
    static CreerToken = (into , temps) => {
        let dataUser = {into}
console.log('into',dataUser);
        const token = jwt.sign(dataUser, process.env.SECRET_JWT, { expiresIn: temps });
        console.log(token);
        return token; 

    }

    static VerifierToken = (token) => {
        return new Promise((resolve, reject) => {
         jwt.verify(token, process.env.SECRET_JWT, (error, decodedToken) => {
                if (error) {
                    console.log('Token non valide',error);
                    reject({"erreur":error})
                } else {
                    console.log(decodedToken)
                    resolve({"success":decodedToken})
                }
            });

        })

    }


    
    static requireAuth = async (req, res, next) => {
        const token = req.header('Authorization').split(' ')[1].trim();
        if (token) {
          try {
            const decodedToken = jwt.verify(token, process.env.SECRET_JWT);
            console.log("decodedToken", decodedToken);
            const user = await Userdata.UserbyId(decodedToken.into); 
            if (user.success) {
              next();
            } else {
              res.status(401).send('token invalide');
            }
          } catch (err) {
            console.log(err.message);
            res.status(401).send('authentification');
          }
        } else {
          res.status(401).send('authentification');
        }
      };
      


}


module.exports = jsonwt;