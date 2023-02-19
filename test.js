const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);
// connect db

mongoose.connect('mongodb://localhost/pcat-testone-db');

const photoSchema = new Schema({
  title: String,
  description: String,
});

const photo = mongoose.model('photo', photoSchema);

//create photo

// photo.create({
//   title: 'photo title 2',
//   description: 'lorem ipsun 2',
// });

// read  photo
// photo.find({}, (err, data) => {
//   console.log(data);
// });

const id = '63e11284397c5b6cb10b88de';

// photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'photo title 1 updated',
//     description: 'lorem ipsun 1 updated',
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

// photo.findByIdAndDelete(id, (err, data) => {
//   console.log(data);
// });
