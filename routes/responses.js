const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    console.log("here",req.body)
    res.json(req.body)

})

module.exports = router;