const nodemailer = require("nodemailer");
const config = require("../nodemailer/config");

module.exports.sendEmail = async (request, response) => {

    const transporter = nodemailer.createTransport({
        transport: config.transport,
        host: config.host,
        port: config.port,
        secure: config.secure, 
        auth: {
            user: config.auth.user, 
            pass: config.auth.auth, 
        },
        tls: {
            ciphers: config.tls.ciphers,
            rejectUnauthorized: config.tls.rejectUnauthorized
        }
    });

    let info = await transporter.sendMail({
        from: request.body.contact.email, 
        to: process.env.MY_EMAIL, 
        html: 
        `<p>My name is: ${request.body.contact.name}<p>
        <br>
        <p>My name is: ${request.body.contact.subject}<p>`, 
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    response.send(request.body.contact);
}