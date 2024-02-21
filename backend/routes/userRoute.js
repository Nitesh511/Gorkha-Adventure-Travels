const express= require("express");

const {registerUser, loginUser, demo, logout, forgetPassword, resetPassword}=require('../controllers/userController');




const router= express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/demo").get(demo);
router.route("/logout").get(logout);
router.route("/password/forget").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);

module.exports=router;