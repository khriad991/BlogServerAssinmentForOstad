const express =require('express');
const {userRegistetion, singIn} = require("../controlles/userController");



const router =express.Router();

/// registeton
router.post('/reg',userRegistetion)
router.post("/login", singIn);


module.exports = router;