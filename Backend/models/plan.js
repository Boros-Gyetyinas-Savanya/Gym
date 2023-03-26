const mongoose = require('mongoose');

const planSchema = new mongoose.Schema(
    {
        name: String,
        desc: String,
        price: String,
        features: Array,
    },
    { timestamps: true }
);

module.exports = mongoose.model('plan', planSchema);
