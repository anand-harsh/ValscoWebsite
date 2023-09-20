const nodemailer = require('nodemailer')
require("dotenv").config()

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    service:'gmail',
    auth:{
        user: "valscotech@gmail.com",
        pass: "yrmquydrbslmdhrx"
    },
    pool: true
});

module.exports = transporter;