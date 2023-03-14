const express = require("express");
const router = express.Router();
const { postTrainer, getTrainer } = "../controllers/trainerControllers";

router.get("/", () => require(getTrainer));
router.post("/", () => require(postTrainer));

module.exports = router;
