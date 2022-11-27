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
    result: [
      {
        type: Map,
        of: Array,
      },
    ],
    isStarted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Game", GameSchema);
