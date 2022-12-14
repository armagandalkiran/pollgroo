const Panel = require("../models/panel");

const getPanelDatas = async (req, res) => {
  try {
    const panels = await Panel.find().sort({ createdAt: -1 });
    res.status(200).json(panels);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserPanelDatas = async (req, res) => {
  try {
    const panels = await Panel.findOne({ userId: req.user.id });
    res.status(200).json(panels);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getPanelDatas, getUserPanelDatas };
