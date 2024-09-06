const express = require("express");
const router = express.Router();
const { createQuotes } = require("../controller/quotedController");

router.post("/create", createQuotes);

module.exports = router;
