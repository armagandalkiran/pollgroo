const Panel = require("../models/panel");

const getPanelDatas = async (req, res) => {
  try {
    const panels = await Panel.find().sort({ createdAt: -1 });
    res.status(200).json(panels);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getPanelDatas };
