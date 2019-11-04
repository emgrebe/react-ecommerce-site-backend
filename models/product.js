let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
  title: String,
  price: Number,
  quantity: Number,
  image: String
});

module.exports = mongoose.model('Product', productSchema);