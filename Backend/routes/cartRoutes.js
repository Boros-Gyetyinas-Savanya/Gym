const express = require('express');
const router = express.Router();
const { getCart, postCart } = require('../controllers/cartControllers');

router.get('/', getCart);
router.post('/', postCart);

module.exports = router;
