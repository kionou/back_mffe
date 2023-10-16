var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();





const { Server } = require("socket.io");
const http = require("http");
const httpServer = http.createServer(app);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sujetRouter = require('./routes/sujet');
var CentreRouter = require('./routes/centre');
var CommentaireRouter = require('./routes/commentaire');
var SignalerRouter = require('./routes/signaler');
var AbonnerRouter = require('./routes/abonner');
var ChatRouter = require('./routes/chat');


mongoose.connect(process.env.MONGO_URL)
.then((resultat)=>{
  console.log('Connecter avec success la base de donnée');

 
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use('/uploads',express.static('./uploads'))

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/sujet', sujetRouter);
app.use('/api/centre', CentreRouter);
app.use('/api/commentaire', CommentaireRouter);
app.use('/api/signaler', SignalerRouter);
app.use('/api/abonner', AbonnerRouter);
app.use('/api/chat', ChatRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


const io = new Server(httpServer, 
  { cors :{
    origin:["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
}});
let sujet= io.of("/api/chat/1");
sujet.on("connection", (socket) => {
 console.log("a user connected" );
 socket.on('nouveau_sujet',async  (sujetEnAttente)=>{
  console.log("sujetEnAttente", sujetEnAttente);
  socket.emit('message_influenceur', sujetEnAttente);

  //  const Sujet = await Sujetdata.insertSujet(sujetEnAttente)
  //   if (Sujet.success) {
  //       // res.status(201).send({"message":"sujet enregistrer"})
  //      socket.emit('message_influenceur', "sujet enregistrer");
  //   } else {
  //       const error = handlErrors(Sujet.erreur)
  //       res.status(400).json({"alert":error})
  //   }

});

});

// let sujetAll= io.of("/api/sujet");
// sujetAll.on("connection", async (socket) => {
//   console.log("a user connected" );
//   const Sujet = await Sujetdata.SujetrAll()
//   if (Sujet.success) {
     
//      socket.emit('message_All', Sujet.success);
//   } else {
     
//   }
 
//  });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});
})
.catch((error)=>{
  console.log("base de donnée non connect",error);
})

module.exports = { app, httpServer };
