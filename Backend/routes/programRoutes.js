const express = require('express');
const router = express.Router();
const {
    postProgram,
    getProgram,
    deleteProgram,
    updateProgram,
    getAllPrograms,
    putProgram,
} = require('../controllers/programsControllers');

router.get('/', getProgram);
router.get('/programs', getAllPrograms);
router.post('/', postProgram);
router.post('/delete', deleteProgram);
router.post('/modosit', updateProgram);
router.put('/', putProgram);

module.exports = router;
