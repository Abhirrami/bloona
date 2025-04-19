const express = require("express");
const router = express.Router();
const { donorSignup, donorLogin } = require("../controllers/authDonorConroller");

router.post("/signup", donorSignup);
router.post("/login", donorLogin);

module.exports = router;
