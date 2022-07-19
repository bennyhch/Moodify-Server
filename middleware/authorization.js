const jwt = require("jsonwebtoken");
const CustomError = require("../errors");

// authentication error ????!!
const authorization = (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new CustomError.UnauthorizedError("Unathorized route, no token");
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);

    req.user = { email: payload.email, userId: payload.userId };
    next();
  } catch (error) {
    throw new CustomError.UnauthorizedError("Unauthorized route ");
  }
};

module.exports = authorization;
