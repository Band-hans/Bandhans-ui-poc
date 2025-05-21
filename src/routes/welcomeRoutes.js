const express = require("express");
const { getWelcomeMessage } = require("../controllers/welcomeController");

const router = express.Router();

router.get("/", getWelcomeMessage);

module.exports = router;