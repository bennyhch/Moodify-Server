const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/userController");

const rateLimiter = require("express-rate-limit");
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);

router.get("/logout", logout);

module.exports = router;
