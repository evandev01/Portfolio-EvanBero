const router = require("express").Router();
const genEmail = require('../emailer/generate-email');

// Email post route
router.post('/send', (req, res) => {
    console.log('Message sent: ' + res);
    // Info entered into contact form
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const occupation = req.body.occupation
    const subject = req.body.subject
    const message = req.body.message

    // Contact email object
    const mail = {
        from: (firstName + ' ' + lastName),
        to: 'http mail api I will be using',
        email: email,
        occupation: occupation,
        subject: subject,
        text: message
    }

    console.log('Congratulations - message sent!')
    //  + JSON.stringify(mail));

    // genEmail.sendMessage(mail);
    res.send('Success');

    // Auto-reply email object
    const autoReplyEmail = {
        from: 'Evan Bero',
        to: email,
        subject: 'Submission was successful',
        text: 'Thank you for contacting me! \n Please feel free to reach out if you have any further questions. \n Best, \n Evan Bero \n Full-stack Web Developer \n evanbero1980@gmail.com'
    }
    console.log('Congratulations - auto-reply message sent! ')
    //  + JSON.stringify(autoReplyEmail));
    // genEmail.autoReply(autoReplyEmail);
});

//Console.log(JSON.stringify(variable))