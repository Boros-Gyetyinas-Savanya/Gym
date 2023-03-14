const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("program", programSchema);
