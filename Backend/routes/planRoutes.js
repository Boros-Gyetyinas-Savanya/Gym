const express = require('express');
const router = express.Router();
const { getPlan, postPlan } = require('../controllers/planControllers');

router.get('/', getPlan);
router.post('/', postPlan);

module.exports = router;
