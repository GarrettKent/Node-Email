const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2abe1575f92733",
      pass: "bfa8d85ce47e88"
    }
  });

  const message = {
    from: '23garrettkent@gmail.com', // Sender address
    to: '23garrettkent@gmail.com',         // List of recipients
    subject: 'Test Nodemailer', // Subject line
    text: 'This an email sent using Nodemailer and Mailtrap.io' // Plain text body
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});