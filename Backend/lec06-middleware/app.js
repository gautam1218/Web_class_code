const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended : true}));




app.get("/",(req,res)=>{
    res.send("home page....");
})

app.post("/register",(req,res)=>{
    console.log(req.body);

    res.send("user registration compleated....")
})








app.listen(port,()=>{
    console.log(`server is runningf at port no ${port}`);
})