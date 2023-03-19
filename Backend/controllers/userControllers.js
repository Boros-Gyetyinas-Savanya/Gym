const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.getUser = async (req, res) => {
    try {
        const spori = await User.find();
        console.log(spori);
        res.json(spori);
    } catch {
        res.json({ msg: error.message });
    }
};

exports.registerUser = async (req, res) => {
    try {
        const adatok = req.body;

        const ugyfel = await User.findOne({ nev: adatok.nev });

        if (ugyfel) {
            return res.json({ message: 'Ilyen néven már van ügyfelünk!' });
        }

        const hashedPassword = await bcrypt.hash(adatok.password, 10);

        const newUser = new User({
            nev: adatok.nev,
            email: adatok.email,
            password: hashedPassword,
        });
        await newUser.save();
        console.log(adatok);
        res.status(200).json({ msg: 'Sikeres regisztráció!' });
    } catch (error) {
        res.json({ msg: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const adatok = req.body;

        const ugyfel = await User.findOne({ nev: adatok.nev });

        if (!ugyfel) {
            return res
                .status(500)
                .json({ message: 'Ilyen néven nincs ügyfelünk!' });
        }

        const osszeHasonlit = await bcrypt.compare(
            adatok.password,
            ugyfel.password
        );

        console.log(osszeHasonlit);

        if (osszeHasonlit) {
            // console.log(ugyfel);
            res.status(200).json(ugyfel);
        } else {
            res.status(500).json({ msg: 'Sikertelen bejelentkezés!' });
        }
    } catch (error) {
        res.json({ msg: error.message });
    }
};
