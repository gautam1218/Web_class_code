const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
// let i=0;

app.use(express.static("public"));

app.use((req,res,next)=>{
//     i++;
//    const timesstamp =new Date();
//     console.log(timesstamp);

//     const log=`client data=${i},${req.url},${req.ip}, ${timesstamp}\n`
//     fs.appendFileSync("log.txt",log,"utf-8");


    next();
})



app.get("/",(rreq,res)=>{
    res.send("home page....");
})

app.post("/register",(req,res)=>{
    res.send("user registration compleated....")
})








app.listen(port,()=>{
    console.log(`server is runningf at port no ${port}`);
})