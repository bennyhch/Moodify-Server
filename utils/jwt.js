const jwt = require("jsonwebtoken");

const createToken = ({ email }) => {
  // check if username and email exist in the controller before passing the args to this helper function
  return jwt.sign({ email }, process.env.SECRET_KEY);
};

const attachCookieToResp = ({ token, res }) => {
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    signed: true,
    //secure?
  });
};

module.exports = { createToken, attachCookieToResp };
