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
  let to_error = false;
  transporter.sendMail(mailOptions, function (error, info) {
    to_error = true ? error : false;
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return to_error;
};
sendEmail("littlejsilva@gmail.com", "hi", "summary");
