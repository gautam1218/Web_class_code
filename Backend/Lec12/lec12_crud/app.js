const express = require("express");
const app=express();
const log=require("./middleware/log.js")
const gold=require("./middleware/gold.js")


const port=3000;







app.listen(port,()=>{
    console.log("server is running at port no 3000");
})