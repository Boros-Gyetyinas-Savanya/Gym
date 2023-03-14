const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    reauired: true,
  },
  password: {
    type: String,
    reauired: true,
  },
});

module.exports = mongoose.model("login", loginSchema);
