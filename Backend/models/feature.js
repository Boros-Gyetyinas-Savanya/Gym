const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema(
  {
    tulajdonsag: Array,
  },
  { timestamps: true }
);

module.exports = mongoose.model("feature", featureSchema);
