"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const axios = require("axios");
const sendEmail = async (from, to, message) => {
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
        to: "littljsilva@gmail.com",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
};
exports.sendEmail = sendEmail;
(0, exports.sendEmail)("hi", "hi", "hi");
