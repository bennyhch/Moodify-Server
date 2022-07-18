const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");
const { createToken, attachCookieToResp } = require("../utils/jwt");
const bcrypt = require("bcryptjs");

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

  const token = createToken({ email, userId: user._id });
  attachCookieToResp({ token, res });

  res.status(StatusCodes.CREATED).json({ msg: "Account created", user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    throw new CustomError.BadRequestError("Please provide password and email");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.BadRequestError(
      "Account not existed in the db, registeration required"
    );
  }

  let isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Incorrect Password");
  }

  const token = createToken({ email, userId: user._id });
  attachCookieToResp({ token, res });

  res.status(StatusCodes.OK).json({ msg: "SUccessful login", user });
};

const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    maxAge: 1,
    secure: true,
  });
  res.status(StatusCodes.OK).json({ msg: "Logged Out Successfully" });
};

module.exports = { register, login, logout };
