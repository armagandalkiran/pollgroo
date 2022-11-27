const Game = require("../models/game");

const getGame = async (req, res) => {
  try {
    const panels = await Game.findOne({ _id: req.params.gameId });
    res.status(200).json(panels);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createGame = async (req, res) => {
  const newGame = new Game(req.body);

  try {
    const savedGame = await newGame.save();
    res.status(200).json(savedGame);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createGame, getGame };
