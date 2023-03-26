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

exports.getAllPrograms = async (req, res) => {
    try {
        const programs = await Program.find().populate('user');
        res.render('program', { programs });
    } catch {
        res.json({ msg: error.message });
    }
};

exports.postProgram = async (req, res) => {
    try {
        const { id, icon, title, info, path } = req.body;
        console.log({ id, icon, title, info, path });
        const newProgram = new Program({
            id,
            icon,
            title,
            info,
            path,
            user: [],
        });
        await newProgram.save();
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

exports.deleteProgram = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const progi = await Program.findOneAndDelete({ _id: id });
        res.json(progi);
    } catch (error) {
        res.json({ msg: 'Valami hiba történt!' });
    }
};

exports.updateProgram = async (req, res) => {
    const { id, icon, title, info, path } = req.body;

    const progi = await Program.findOneAndUpdate(
        { id },
        { icon, title, info, path },
        { new: true }
    );

    console.log(progi);

    res.status(200).json(progi);
};
