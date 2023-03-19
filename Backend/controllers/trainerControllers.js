const Trainer = require('../models/trainer');

exports.postTrainer = async (req, res) => {
    try {
        const adatok = req.body;
        const newTrainer = new Trainer(adatok);
        await newTrainer.save();
        console.log(adatok);
        res.json({ msg: 'Edzők feltöltése' });
    } catch {
        res.json({ msg: error.message });
    }
};

exports.getTrainer = async (req, res) => {
    try {
        const spori = await Trainer.find();
        res.json(spori);
    } catch {
        res.json({ msg: error.message });
    }
};
