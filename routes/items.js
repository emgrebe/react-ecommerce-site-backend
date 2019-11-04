const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

/* GET users listing. */
router.get('/new', itemsCtrl.new);

module.exports = router;
