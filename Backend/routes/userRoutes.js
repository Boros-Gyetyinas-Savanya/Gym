const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUser,
    getAllUsers,
    deleteUser,
} = require('../controllers/userControllers');

router.get('/', getUser);
router.get('/users', getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/delete', deleteUser);

module.exports = router;
