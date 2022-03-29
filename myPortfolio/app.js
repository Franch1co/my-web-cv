if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const path= require('path');
// const { sendEmail } = require('./controller/emailSender');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.render('index.ejs');
})

// app.post('/contact', sendEmail);

app.listen(3000, () => {
    console.log('Serving on port 3000...');
})