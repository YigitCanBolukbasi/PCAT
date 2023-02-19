const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

const port = 3000;

const myLogger = (res, req, next) => {
  console.log('middleware log 1');
  next();
};

//middle ware
app.use(express.static('public'));
app.use(myLogger);

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/add', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add');
});

app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
