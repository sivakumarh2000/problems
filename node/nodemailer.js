const nodemailer = require('nodemailer');

try{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sivakumar.h2905@gmail.com',
    pass: 'esegdtauvpnlyykq'
  }
});
//'kris42581@gmail.com',

var mailOptions = {
  from: 'sivakumar.h2905@gmail.com',
  to: 'martinfredy780@gmail.com',
  subject: 'Resume Sending Using Nodejs',
  text: 'Im Siva Kumar,There is any openings for Nodejs Developer role.Please let me know. \nThanking You \nSiva Kumar',
  attachments:[
    {
        filename:"SivaKumar_Resume.pdf",
        path:"C:/Users/Bavi/OneDrive/Desktop/interview/node/sivakumar.pdf",
        contentType:"application/pdf"
    }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}catch(err){
    console.log('Error in nodemailer',err);
}

