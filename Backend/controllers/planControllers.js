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

exports.getAllPlans = async (req, res) => {
    try {
        const tulajdonsagok = await Plan.find();
        res.render('plan', { tulajdonsagok });
    } catch (error) {
        res.json({ msg: error.message });
    }
};

exports.postPlan = async (req, res) => {
    try {
        console.log(req.body);
        const newPlan = new Plan(req.body);
        await newPlan.save();
        res.json(newPlan);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.deletePlan = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const progi = await Plan.findOneAndDelete({ _id: id });
        res.json(progi);
    } catch (error) {
        res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.updatePlan = async (req, res) => {
    const { id, name, desc, price, features } = req.body;
    console.log({ id, name, desc, price, features });

    const plani = await Plan.findOneAndUpdate(
        { _id: id },
        { name, desc, price, features },
        { new: true }
    );

    console.log(plani);

    res.status(200).json(plani);
};
