// const User = require('../models/user');
const Program = require("../models/program");

exports.getProgram = async (req, res) => {
  try {
    const programs = await Program.find().populate("user");
    res.json(programs);
  } catch {
    res.json({ msg: error.message });
  }
};

exports.postProgram = async (req, res) => {
  try {
    const adatok = req.body;
    const newProgram = new Program(adatok);
    await newProgram.save();
    console.log(adatok);
    res.json({ msg: "Sportolni vágyók feltöltése" });
  } catch {
    res.json({ msg: error.message });
  }
};
