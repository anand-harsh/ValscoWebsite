const express = require('express')
const app = express()
const transporter = require('./email')
require('dotenv').config();
const cors = require('cors')
let port = process.env.PORT || 5000;
let url = 'https://valscotech.com/'


app.use(express.json());
app.use(cors({
    origin: url,
}));

app.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;

        const Client = {
            from: "connect@valscotech.com",
            to: email,
            subject: "Form Submitted Successfully",
            text: "Thank You for contacting us, We will reply to you shortly!"
        }

        const Admin = {
            from: "connect@valscotech.com",
            to: "connect@valscotech.com",
            subject: "Contact Form Submitted",
            text: `By ${name}, ${email} `
        }

        const optArray = [Client, Admin];

        // Use map to create an array of promises
        const emailPromises = optArray.map(option => {
            return new Promise((resolve, reject) => {
                transporter.sendMail(option, (err, info) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(`Message sent successfully to ${option.to}`);
                        resolve(info);
                    }
                });
            });
        });

        // Wait for all promises to resolve using Promise.all
        await Promise.all(emailPromises);

        console.log("All messages sent successfully!");
        res.status(200).send("Emails sent successfully!");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("An Error Occurred!");
    }
});


app.listen(port, () => {
    console.log(`the application has started successfully on localhost: http://localhost:${port}`);
})
