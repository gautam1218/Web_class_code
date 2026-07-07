const express = require("express");
const mongoose = require("mongoose");
console.log(mongoose);

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/');

.then(()=>{
    console.log("database connection alive...")
});
.catch()

app.get("/",(req,res)=>{
    res.send()
})



app.listen(3000,(req,res)=>{
    console.log("server is running at poert 3000");
})
