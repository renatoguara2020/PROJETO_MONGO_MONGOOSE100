const { Timestamp } = require('mongodb');
const { now } = require('mongoose');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'renatoguara2020@gmail.com',
    pass: 'agciqpqrqferdazp'
  }
});

var mailOptions = {
  from: 'renatoguara2019@yahoo.com',
  to: 'renatoguara2020@gmail.com',
  subject: 'Sending Email using Node.js 2023',
  text: 'That was easy Renato Alves Soares 08 54!!!!!!!!!!!! ' +now().getDate() +' '+now().getFullYear() +' '+now().getMonth()
};
 


transporter.sendMail(mailOptions, function(error, info){
  if(error) {
    console.log(error);
  } else {
    console.log('Email sent now !!!!!!!!!!!!!!: ' + info.response);
    
  }
});