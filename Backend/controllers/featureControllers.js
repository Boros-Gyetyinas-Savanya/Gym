const Feature = require("../models/feature");

exports.getFeature = async (req, res) => {
  try {
    const tulajdonsagok = await Feature.find();
    console.log(tulajdonsagok);
    res.send(tulajdonsagok);
  } catch {
    res.json({ msg: error.message });
  }
};
