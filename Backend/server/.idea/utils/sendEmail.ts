const axios = require("axios");

export const sendEmail = async (to: string, message, subject) => {
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arptestemail123@gmail.com",
      pass: "pvdaiywgiyuvxkgu",
    },
  });

  var mailOptions = {
    from: "arptestemail123@gmail.com",
    to: to,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
sendEmail("littlejsilva@gmail.com", "hi", "summary");
