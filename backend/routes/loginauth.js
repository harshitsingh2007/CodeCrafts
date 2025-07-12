const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    console.log("Login route accessed");
})

exports.loginAuth = router;