const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);

// db varsa bağlanır yoksa yeni oluşturur
mongoose.connect('mongodb://localhost/pcat-testone-db');

// yeni bir şema oluşturur
const photoSchema = new Schema({
  title: String,
  description: String,
});

// oluşturulan şablonu yeni koleksiyon oluşturarak bunun içine atar
const photo = mongoose.model('photo', photoSchema);

//create photo

// photo.create({
//   title: 'photo title 3',
//   description: 'lorem ipsun 3',
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
