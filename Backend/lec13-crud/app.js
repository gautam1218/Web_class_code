const express=require("express");
const app = express();

// const dotenv=require("dotenv");
// dotenv.config()
require("dotenv").config();



const PORT = process.env.PORT
console.log(PORT)


app.listen(PORT,(req,res)=>{
    console.log(`server is running at port no ${PORT}`)
})