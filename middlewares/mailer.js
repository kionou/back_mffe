const nodemailer = require("nodemailer");
require('dotenv').config()

exports.mailer = (email,user , pass)=>{
    console.log('emm',email , user.password);
  return new Promise((resolve,reject)=>{
  let transporter = nodemailer.createTransport({
      service:'gmail', 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
      },
    });
  let mailOptions = {
      from: process.env.EMAIL, 
      to:email, 
      subject: "Connexion", // Subject line
      text: "Les coordonées de connexion", 
      html: `<p> Votre compte a été créé avec succès ! Voici vos informations de connexion <br> 
      <span style="font-weight: bolder;">Nom d'utilisateur: </span>  ${user.pseudo} <br>
      <span style="font-weight: bolder;"> Adresse e-mail: </span>    ${user.email} <br>
      <span style="font-weight: bolder;">Mot de passe: </span>       ${pass}
      
            </p> 
                  `  
    };

  transporter.sendMail(mailOptions, (error, info)=>{
   if (error) {
    console.log('error',error);
    reject(error);

   } else {
    console.log('success' , info.response);
    resolve(info.response);
   }
}); 
})
}