const express = require("express");
const router = express.Router();
const { postuser, getUser } = require("../controllers/programsControllers");

router.get("/", getUser);
router.post("/", postuser);

module.exports = router;
