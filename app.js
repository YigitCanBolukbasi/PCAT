const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');

const app = express();

mongoose.connect('mongodb://localhost/pcat-testone-db');

app.set('view engine', 'ejs');

const port = 3000;

const myLogger = (res, req, next) => {
  console.log('middleware log 1');
  next();
};

//middle ware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});
app.get('/about', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/add', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add');
});

app.post('/photos', async (req, res) => {
  console.log('req:', req.body);
  // yakaladığımız veriyi dbye atıyoruz
  Photo.create(req.body);
  // ana sayfaya yönlendirir
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
