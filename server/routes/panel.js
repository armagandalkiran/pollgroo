const express = require("express");
const { verifyTokenAndAdmin } = require("../verifyToken.js");
const { getPanelDatas } = require("../controllers/panelController");
const router = express.Router();

router.get("", verifyTokenAndAdmin, getPanelDatas);

module.exports = router;
