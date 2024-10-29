const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://contact-us-form-frontend-pearl.vercel.app'
  }));
  
app.post('/', (req, res) => {
    res.download("Setup-ConnectApp.exe");
   
});
// Serve static files (including setup file)
// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/api/download', (req, res) => {
//     // Assuming your setup file is in the 'public' directory
//     const filePath = path.join(__dirname, 'public', 'Setup-ConnectApp.exe');
//     res.download(filePath); // This will trigger the download of the setup file
// });

// app.get('/', (req, res) => {
//     res.send('Welcome to my forms');
// });

app.post('/api/formEndpoint', (req, res) => {
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service: 'outlook',
        port: 465,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'abhi19982014@gmail.com',
        subject: `Message from ${data.firstName}`,
        html: `
            <h3>Customer Information</h3>
            <ul>
                <li>Name: ${data.firstName}</li>
                <li>Email: ${data.email}</li>
                <li>Mobile Number: ${data.mobileNumber}</li>
                <li>Company:${data.companyName}</li>
            </ul>
            <h3>Message from customer:</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email. Please try again later.');
        } else {
            res.status(200).send('Email sent successfully.');
        }
    });

    smtpTransport.close();
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Server starting at port ${PORT}`);
});
