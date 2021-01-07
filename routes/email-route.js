const router = require("express").Router();

// Email post route
router.post('/send', (req, res, next) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const occupation = req.body.occupation
    const subject = req.body.subject
    const message = req.body.message
    const content = `
    firstName: ${firstName} \n 
    lastName: ${lastName} \n
    email: ${email} \n 
    occupation: ${occupation} \n
    subject: ${subject} \n
    message: ${message} `
});