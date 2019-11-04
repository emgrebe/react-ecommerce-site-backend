let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cartSchema = new Schema({
  item: String,
  price: Number,
  quantity: Number
});

let userSchema = new Schema({
  email: String,
  name: String,
  address: String,
  googleId: String,
  cart: [cartSchema]
});

module.exports = mongoose.model('User', userSchema);