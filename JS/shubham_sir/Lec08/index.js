

const express = require("express") //import express from module
const app = express()
const PORT = 4000;



// //middlewares
// app.use("/",(req,res)=>{
//     console.log("middleware");
//     //req will get stack as we haven't send it to next functon/middleware
// })




app.use("/",(req,res,next)=>{
    console.log("middleware");
    next() //it passes the req to next middleware
})



app.get("/",(req,res)=>{
    console.log(req);
    res.send("hello,the server is live and method is get")
}) 

app.post("/",(req,res)=>{
    console.log(req);
    res.send("hello,the server is live and method is post")
})

app.put("/",(req,res)=>{
    console.log(req);
    res.send("hello,the server is live and method is put")
})

app.patch("/",(req,res)=>{
    console.log(req);
    res.send("hello,the server is live and method is patch")
})

app.delete("/",(req,res)=>{
    console.log(req);
    res.send("hello,the server is live and method is delete")
})

app.listen(PORT,()=>{
    console.log("server is started at",`http://localhost:${PORT}`);
})