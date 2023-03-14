const User = require("../models/edzok");
const Program = require("../models/program");

exports.getUser = async (req, res) => {
  try {
    const spori = await Program.find();
    //console.log(spori);
    // const edzo = await Trainer.findById(spori.edzo);
    // console.log(edzo);
    res.json({ spori });
  } catch {
    res.json({ msg: error.message });
  }
};

exports.postuser = async (req, res) => {
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
