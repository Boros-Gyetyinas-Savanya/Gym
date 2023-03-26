const express = require('express');
const router = express.Router();
const {
    getPlan,
    postPlan,
    deletePlan,
    updatePlan,
    getAllPlans,
} = require('../controllers/planControllers');

router.get('/', getPlan);
router.get('/plans', getAllPlans);
router.post('/delete', deletePlan);
router.post('/modosit', updatePlan);
router.post('/', postPlan);

module.exports = router;
