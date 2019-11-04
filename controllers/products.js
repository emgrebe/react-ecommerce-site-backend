let Product = require('../models/product');

module.exports ={
  index,
  show,
  addItem,
  charge
}

function index(req, res) {
  console.log(req.query);
  let modelQuery = req.query.price ? {price: new RegExp(req.query.price, 'i')} : {};
  let sortKey = req.query.sort || 'price';
  Product.find(modelQuery)
  .sort(sortKey).exec(function(err, products) {
    if(err) return next(err);
    res.render('products/index', {
      products, 
      user: req.user,
      price: req.query.price,
      sortKey
    });
  });
}

function addItem(req, res) {
  req.user.cart.push(req.body);
  req.user.save(function(err) {
    res.redirect('/products')
  })
}

function charge(req, res) {
  res.render('products/orders/new', {user: req.user});
}

function show(req, res) {
  Product.findById(req.params.id, function(err, product) {
    res.render('products/show', {title: 'Products', product});
  });
}