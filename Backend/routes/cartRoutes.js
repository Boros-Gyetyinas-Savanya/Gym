const express = require('express');
const router = express.Router();
const {
    getCart,
    getAllCarts,
    postCart,
    deleteCart,
} = require('../controllers/cartControllers');

router.get('/', getCart);
router.get('/carts', getAllCarts);
router.post('/', postCart);
router.post('/delete', deleteCart);

module.exports = router;
