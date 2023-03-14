const express = require("express");
const router = express.Router();
const { getFeature } = "../controllers/featureControllers";

router.get("/", () => require(getFeature));

module.exports = router;
