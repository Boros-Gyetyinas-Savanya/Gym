const mongoose = require('mongoose');
const User = require('./user');

const programSchema = new mongoose.Schema(
    {
        id: Number,
        icon: {
            type: String,
        },
        title: {
            type: String,
        },
        info: {
            type: String,
        },
        path: {
            type: String,
        },
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('program', programSchema);
