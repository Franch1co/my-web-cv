module.exports = {
    transport: "smtp",
    host: "smtp-mail.outlook.com",
    port: "587",
    secure: false,
    auth: {
        user: process.env.MY_EMAIL, 
        pass: process.env.PASSWORD_EMAIL, 
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    }
}