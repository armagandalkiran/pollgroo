const express = require("express");
const { createGame, getGame } = require("../controllers/gameController.js");
const { verifyTokenAndAdmin, verifyToken } = require("../verifyToken.js");

const router = express.Router();

router.post("/", verifyTokenAndAdmin, createGame);
router.get("/:gameId", verifyToken, getGame);

module.exports = router;
