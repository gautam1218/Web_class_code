const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    console.log(req.params);

    res.json({
       "name":"Gautam kumar",
       "college" : "mirai"
    })
    res.send()
})


app.get("/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    // res.send("fail h ....");
    res.send(`fail ho gaya ${req.params.roll}`);
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("data found in. db")
})


app.listen(3000,(req,res)=>{
    console.log("server is running at poert 3000");
})
