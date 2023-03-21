const User = require('../models/user');
const Program = require('../models/program');

exports.getProgram = async (req, res) => {
    try {
        const programs = await Program.find().populate('user');
        res.json(programs);
    } catch {
        res.json({ msg: error.message });
    }
};

exports.postProgram = async (req, res) => {
    try {
        const adatok = req.body;
        const newProgram = new Program(adatok);
        await newProgram.save();
        console.log(adatok);
        res.status(200).json({ msg: 'Sportolni vágyók feltöltése' });
    } catch {
        res.status(500).json({ msg: error.message });
    }
};

exports.putProgram = async (req, res) => {
    try {
        const { id, nev } = req.body;
        const userke = await User.findOne({ nev });
        const progi = await Program.updateOne(
            { id },
            { $push: { user: userke } }
        );
        res.status(200).json({ msg: 'Sikeres jelentkezés!' });
    } catch {
        res.status(500).json({ msg: error.message });
    }
};
