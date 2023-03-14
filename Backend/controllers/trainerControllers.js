const Trainer = require("../models/edzok");

exports.postTrainer = async (req, res) => {
  try {
    const adatok = req.body;
    const newTrainer = new Trainer(adatok);
    await newTrainer.save();
    //console.log(adatok);
    res.json({ msg: "Edzők feltöltése" });
  } catch {
    res.json({ msg: error.message });
  }
};

exports.getTrainer = async (req, res) => {
  try {
    const spori = await Trainer.find();
    // console.log(spori);
    // const edzo = await Trainer.findById(spori.edzo);
    // console.log(edzo);
    res.json({ spori });
  } catch {
    res.json({ msg: error.message });
  }
};
