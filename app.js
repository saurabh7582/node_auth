const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get('/',(req,res)=>{
    res.json({
        message:"a sample api"
    })
})

app.listen(443,()=>{
    console.log("app listen on 443");
})