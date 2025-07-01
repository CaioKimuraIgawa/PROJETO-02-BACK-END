const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRt = require('./routes/loginRt');
const protgRt = require('./routes/protgRt');

const app = express();

//mongoose.connect('mongodb://localhost:27017/projeto02');
mongoose.connect('mongodb://127.0.0.1:27017/projeto02'); //usado em casa

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(
  session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
  })
);

app.use('/', loginRt);
app.use('/dashboard', protgRt);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
