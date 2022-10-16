const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    criterias: [
      {
        type: Map,
        of: Number,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Game", GameSchema);
