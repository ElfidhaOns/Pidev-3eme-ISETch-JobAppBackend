var express=require('express');
var bodyParser = require('body-parser')// importing body parser middleware to parse form content from HTML

const emailRouter = express.Router();
var nodemailer = require('nodemailer');//importing node mailer


emailRouter.route('/')



// route which captures form details and sends it to your personal mail
.post((req,res,next)=>{
  
  console.log("oooo",req.body.email)
  /*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
    here we are using gmail as our service 
    In Auth object , we specify our email and password
  */
var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user:"onsfidha3@gmail.com",
    pass: "--"
  }
});

var mailOptions = {
  from: "onsfidha3@gmail.com",
  to: "hvh912326@gmail.com",
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error') // if error occurs send error as response to client
    } else {
      console.log('Email sent: ' + info.response);
      res.send(info.response)//if mail is sent successfully send Sent successfully as response
    }
  });
})


module.exports = emailRouter;
