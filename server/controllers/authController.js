const User = require("../models/user");
const { ERROR_MESSAGES } = require("../constants");
const Cryptr = require("cryptr");
const dotenv = require("dotenv");
dotenv.config();
const cryptr = new Cryptr(process.env.SECRET);
const jwt = require("jsonwebtoken");

// DATA TRANSFER OBJECTS

const authDTO = (user, accessToken) => {
  return {
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin,
    accessToken: accessToken,
  };
};

// USER REGISTRATION

const registerUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptr.encrypt(req.body.password),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// USER LOGIN

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    const decodedPassword = cryptr.decrypt(user.password);
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.AUTH_KEY,
      { expiresIn: "3d" }
    );
    if (!user || decodedPassword !== req.body.password) {
      res.status(401).json(ERROR_MESSAGES.WRONG_PASSWORD);
    } else {
      res.status(200).json(authDTO(user._doc, accessToken));
    }
  } catch (err) {
    res.status(500).json(err, ERROR_MESSAGES.WRONG_MAIL);
  }
};

module.exports = { registerUser, loginUser };
