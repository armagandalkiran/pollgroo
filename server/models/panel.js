const mongoose = require("mongoose");

const PanelSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    games: [
      {
        gameId: {
          type: String,
        },
        subject: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Panel", PanelSchema);
