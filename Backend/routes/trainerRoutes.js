const express = require('express');
const router = express.Router();
const {
    postTrainer,
    getTrainer,
} = require('../controllers/trainerControllers');

router.get('/', getTrainer);
router.post('/', postTrainer);

module.exports = router;
