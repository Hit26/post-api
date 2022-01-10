const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    console.log("Log:",req.body)
    
})

module.exports = router;