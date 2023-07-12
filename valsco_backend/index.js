const express = require('express')
const app = express()
const transporter = require('./email')
require('dotenv').config();
const cors = require('cors')
let port = 5000;
let url = 'http://localhost:3000'


app.use(express.json());
app.use(cors({
    origin: url,
}));

app.post('/', async (req, res) => {
    try {
        const {name, email} = req.body;

        const Client = {
            from: process.env.EMAIL,
            to: email,
            subject: "Form Submitted Successfully",
            text: "Thank You for contacting me, We will reply to you shortly!"
        }

        const Admin = {
            from: process.env.EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: "Contact Form Submitted",
            text: `By ${name}, ${email} `
        }

        const optArray = [Client, Admin];

        optArray.forEach((option) => {
            transporter.sendMail(option, (err, info) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log("Sent" + info.response)
                console.log(`Message sent successfully to ${option.to}`)
            })
        });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("An Error Occured!");
    }
})

app.listen(port, () => {
    console.log(`the application has started successfully on localhost: http://localhost:${port}`);
})
