const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema(
    {
        image: {
            type: String,
        },
        name: {
            type: String,
        },
        job: {
            type: String,
        },
        socials: {
            type: Array,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('trainer', trainerSchema);
