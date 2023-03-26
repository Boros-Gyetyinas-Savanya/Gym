const express = require('express');
const router = express.Router();
const {
    postTrainer,
    getAllTrainers,
    getTrainer,
    deleteTrainer,
    updateTrainer,
} = require('../controllers/trainerControllers');

router.get('/', getTrainer);
router.get('/trainers', getAllTrainers);
router.post('/delete', deleteTrainer);
router.post('/modosit', updateTrainer);
router.post('/', postTrainer);

module.exports = router;
