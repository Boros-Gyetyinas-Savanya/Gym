const express = require('express');
const router = express.Router();
const {
    postProgram,
    getProgram,
} = require('../controllers/programsControllers');

router.get('/', getProgram);
router.post('/', postProgram);

module.exports = router;
