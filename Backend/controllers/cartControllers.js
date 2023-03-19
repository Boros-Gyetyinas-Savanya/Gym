const User = require('../models/user');
const Trainer = require('../models/trainer');
const Plan = require('../models/plan');
const Cart = require('../models/cart');

exports.getCart = async (req, res) => {
    try {
        const carts = await Cart.find()
            .populate('user')
            .populate('trainer')
            .populate('plan');
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem jó!' });
    }
};

exports.postCart = async (req, res) => {
    try {
        const { nev, email, terv, edzo } = req.body;
        console.log({ nev, email, terv, edzo });
        const name = `${nev} - ${terv}`;
        const user = await User.findOne({ nev });
        const plan = await Plan.findOne({ name: terv });
        const trainer = await Trainer.findOne({ name: edzo });
        console.log(user);
        console.log(plan);
        console.log(trainer);
        const newCart = new Cart({
            nev: name,
            user: user,
            plan: plan,
            trainer: trainer,
        });
        await newCart.save();
        console.log(newCart);
        res.status(200).json({ msg: 'Sikeres kártya létrehozás!' });
    } catch (error) {
        res.status(500).json({ msg: 'Valami nem stimmel az adatokkal!' });
    }
};
