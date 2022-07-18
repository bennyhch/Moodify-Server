const CustomError = require("../errors");

const checkPermission = (appointmentUserIdFromDB, userIdFromAuth) => {
  if (appointmentUserIdFromDB.toString() === userIdFromAuth) return;
  throw new CustomError.UnauthorizedError("Unauthorized Route");
};

module.exports = checkPermission;
