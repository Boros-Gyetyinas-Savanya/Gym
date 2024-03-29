const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
