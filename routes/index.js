let express = require('express');
let router = express.Router();
let passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Krazy Kendra Sale' });
});
router.get('/products/show', function(req, res) {
  res.render('products/show', {title: 'Krazy Kendra Sale'});
});
router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: 'products',
    failureRedirect: '/'
  }
));
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/products');
});

module.exports = router;
