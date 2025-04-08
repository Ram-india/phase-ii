const express = require('express');
const{registerUser, loginUser, getUserInfo } = require("../controllers/authController");
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

//register new user
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);
//get user info
router.get("/userinfo",authMiddleware, getUserInfo);

module.exports = router;