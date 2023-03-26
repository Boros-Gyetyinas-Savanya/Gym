const Trainer = require('../models/trainer');

exports.postTrainer = async (req, res) => {
    try {
        const adatok = req.body;
        // console.log(adatok);
        const newTrainer = new Trainer(adatok);
        await newTrainer.save();
        // console.log(adatok);
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

exports.getAllTrainers = async (req, res) => {
    try {
        const spori = await Trainer.find();
        res.render('trainer', { spori });
    } catch {
        res.json({ msg: error.message });
    }
};

exports.deleteTrainer = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const ugyi = await Trainer.findOneAndDelete({ _id: id });
        res.json(ugyi);
    } catch (error) {
        res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.updateTrainer = async (req, res) => {
    const { id, name, job, image } = req.body;
    // console.log({ id, name, job, image });

    const edzo = await Trainer.findOneAndUpdate(
        { _id: id },
        { name, job, image },
        { new: true }
    );

    // console.log(edzo);

    res.status(200).json(edzo);
};
