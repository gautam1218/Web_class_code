
const express = require("express");
const app=express();



app.set("view engine","ejs");

let gautam = {
    fname : "Gautam kumar",
    rollno : 33
}

let color = "red";

let adult = {
    age : 1,
    young : "yes"
}

let flag=5;
let ans={}

app.get("/",(req,res)=>{
    res.render("user",{gautam,color,adult,flag});

    // console.log(req.body);
    // res.send("home page")
    // console.log(req.url)

})



app.get("/services",(req,res)=>{
    console.log(req.url)
    res.send("services pages...");
    res.send(req.params);
})


app.listen("3000",()=>{
    console.log("server is running at port no 3000");
})