const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('../config');

const app = express();
app.use(cors());
// app.use(express.json())
app.use('/', router);
app.listen(3000);

// Functions to send send email and auto-reply to sender

module.exports = {
    // SendGrid.com
    // email http api

    // Create sendgrid account
    // Google sendgrid nodemailer

    transport: {
        host: 'smtp.gmail.com', // SMTP host of provider
        port: 587,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    },

    transporter: nodemailer.createTransport(transport),


    // Send and confirm status of email function
    sendMessage: function (mail) {

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log('status: message failed to send')
            } else {
                console.log('status: success! \n This is the data sent: ' + data)
            }
        })
    },

    // Auto-reply confirmation email to sender
    autoReply: function (autoReplyMail) {

        transporter.sendMail(autoReplyMail, (err, data) => {
            if (err) {
                console.log('status: auto-reply message failed to send')
            } else {
                console.log('status: success! \n auto-reply data sent: ' + data)
            }

        })
    }
};

