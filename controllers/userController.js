const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");

const register = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    throw new CustomError.BadRequestError(
      "Please provide username, password and email"
    );
  }
  // check if the account existed in the db
  const isCurrentUser = await User.findOne({ email });
  if (isCurrentUser) {
    throw new CustomError.BadRequestError("Account already existed");
  }

  const user = await User.create({ username, password, email });
  res.status(StatusCodes.CREATED).json({ msg: "Account created", user });
};

const login = async (req, res) => {
  res.send("login route");
};

const logout = async (req, res) => {
  res.send("logout route");
};

module.exports = { register, login, logout };
