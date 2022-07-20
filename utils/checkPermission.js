const CustomError = require("../errors");

const checkPermission = (idFromDB, idFromAuth) => {
  if (idFromDB.toString() === idFromAuth) return;
  throw new CustomError.UnauthorizedError("Unauthorized Route");
};

module.exports = checkPermission;
