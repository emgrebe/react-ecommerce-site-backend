let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  style: {
    type: String,
    enum: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'All'],
    dfault: 'All',
    required: true
  },
  metal: {
    type: String,
    enum: ['Gold', 'Silver', 'Rosegold', 'Gunmetal', 'Matte'],
    default: 'Gold',
    required: true
  },
  price: {
    type: Number,
    min: 10,
    max: 150
  },
  quantity: {
    type: Number,
    default: 1
  },
  image: String
});

module.exports = mongoose.model('Product', productSchema);