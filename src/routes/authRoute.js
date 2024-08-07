const express = require("express")
const router =  express.Router();
const authContoller = require("../controller/authController.js");

router.post("/signup", authContoller.register);
router.post("/login", authContoller.login);

module.exports = router