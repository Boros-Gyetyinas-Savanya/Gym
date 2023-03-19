const mongoose = require('mongoose');
const User = require('./user');
const Plan = require('./plan');
const Trainer = require('./trainer');

const cartSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        plan: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plan',
        },
        trainer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'trainer',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('cart', cartSchema);
