const express = require('express');
const router = express.Router();
const {
    postProgram,
    getProgram,
    putProgram,
} = require('../controllers/programsControllers');

router.get('/', getProgram);
router.post('/', postProgram);
router.put('/', putProgram);

module.exports = router;
