require('./config/db')
const express= require('express');
const cors= require('cors');
const app=express();
const nodemailer = require("nodemailer");

//Define Models
require('./models/index')

//DEFINE_____ROUTES
var sendmail= require('./Routes/sendRouter');
const AnnonceRoute= require('./Routes/AnnonceRoute');
const CandidatRoute=require('./Routes/CandidatRoute');
const RHRoute=require('./Routes/RHRoute');
//Accéder au body du Requete
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var corss={
    origin:"http://localhost:4200"
};
app.use(cors(corss));


//creation transporter
var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user:"onsfidha3@gmail.com",
    pass: "---"
  }
});
//les options de mail
var mailOptions = {
  from: "onsfidha3@gmail.com",
  to: "hvh912326@gmail.com",
  subject: "Entretient",
  text: "vous etes acceptez dans la 1ere selection "
};


const send=()=>{
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    console.log(info);
    return info.response;
  }
});

}

//UTILISATION DES ROUTES
app.use('/annonce', AnnonceRoute);
app.use('/candidat',CandidatRoute);
app.use('/rh',RHRoute);
app.post('/sendmail',(req, res) => { 
  send();
    res.json({message:'mail was sent'})
    res.json(res.send)
    res.end()
  })

//Module filtration
//const filtration=require('./Filtration/filtration')


//Filtration

//let id_RH='6374e23bec9bcdc8c49970ee'

//console.log(filtration(id_RH));
//ADD CSV FILE TO DATABASE

// const  read_add_file=require('./Filtration/moveCsvToDb')
// read_add_file()

module.exports = app;
