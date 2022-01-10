const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    console.log("POST Log:",req.body)
    res.json(req.body)
    
})

router.get('/',(req,res)=>{
    console.log("GET Log:",req.body)
    res.json(req.body)
})

module.exports = router;