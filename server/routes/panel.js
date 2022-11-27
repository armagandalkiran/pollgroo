const express = require("express");
const { verifyTokenAndAdmin } = require("../verifyToken.js");
const {
  getPanelDatas,
  getUserPanelDatas,
} = require("../controllers/panelController");
const router = express.Router();

router.get("", verifyTokenAndAdmin, getPanelDatas);
router.post("", verifyTokenAndAdmin, getUserPanelDatas);

module.exports = router;
