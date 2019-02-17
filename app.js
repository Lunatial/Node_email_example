var nodemailer = require('nodemailer');
require('dotenv').load();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:  process.env.MY_EMAIL,
    pass: process.env.APP_PASS
  }
});

var mailOptions = {
  from: process.env.MY_EMAIL,
  to: 'LoremIpsum@gmail.com',
  subject: 'Subject',
  html: '<h1 style="color: red;">Hi!</h1><br><p>Hello World!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

