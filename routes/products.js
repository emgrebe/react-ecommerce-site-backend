let express = require('express');
let router = express.Router();
let productCtrl = require('../controllers/products');

/* GET users listing. */
router.get('/', productCtrl.index);
router.get('/orders', productCtrl.charge);

module.exports = router;
