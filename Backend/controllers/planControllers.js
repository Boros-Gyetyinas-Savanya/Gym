const Plan = require('../models/plan');

exports.getPlan = async (req, res) => {
    try {
        const tulajdonsagok = await Plan.find();
        console.log(tulajdonsagok);
        res.send(tulajdonsagok);
    } catch (error) {
        res.json({ msg: error.message });
    }
};

exports.postPlan = async (req, res) => {
    try {
        console.log(req.body);
        const newPlan = new Plan(req.body);
        await newPlan.save();
        res.send(newPlan);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
