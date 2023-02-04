const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

const myLogger = (res, req, next) => {
  console.log('middleware log 1');
  next();
};

//middle ware
app.use(express.static('public'));
app.use(myLogger);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
