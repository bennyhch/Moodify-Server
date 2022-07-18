const jwt = require("jsonwebtoken");
const CustomError = require("../errors");

const authorization = (req, res, next) => {
  try {
    const token = req.signedCookies.token;
    if (!token) {
      throw new CustomError.UnauthorizedError("Unathorized route");
    }
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = { email: payload.email, userId: payload.userId };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authorization;
