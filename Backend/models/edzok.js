const mongoose = require("mongoose");

//név, edző,

const trainerSchema = new mongoose.Schema(
  {
    /*nev: {
      type: String,
    },
    idopont: {
      type: Array,
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "program",
    },*/

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

module.exports = mongoose.model("trainer", trainerSchema);
