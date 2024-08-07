const express = require("express")
const router =  express.Router();
const userController = require("../controller/userController.js");
const { route } = require("..");

router.get("/profile", userController.getUserProfile);
router.get("/getallusers", userController.getAllUsers);

module.exports = router