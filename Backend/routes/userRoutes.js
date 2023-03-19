const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUser,
} = require('../controllers/userControllers');

router.get('/', getUser);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
