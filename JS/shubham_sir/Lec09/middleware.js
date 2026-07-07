const express = require("express");
const app = express();
const PORT = 4000;

// inbuild middleware
app.use(express.json());

//custom middleware
app.use("/user",(req,res,next)=>{
    console.log("custom middleware");
    next(); //it will pass the "req" to next middleware.
})

//path specific middleware
//it will only run if the req path starts with "/user"
app.use("/product",(req,res,next)=>{
    console.log("product middleware");
    next(); //it will pass the "req" to next middleware.
})


const routerlevel = (req,res,next)=>{
    console.log("router level middleware");
    next();
}


app.get("/user/all",(req,res)=>{
    res.json({users:["user 1","user 2"]});
})

app.get("/product/all",(req,res)=>{
    res.json({users:["product 1","product 2"]});
})

app.get("/info",routerlevel,(req,res)=>{
    // console.log("app report");
    console.log(app);
    res.send("report generated");
})

//start server, port -> mapping of process in system
app.listen(PORT,()=>{
    console.log("server is started at",`http://localhost:${PORT}`)
})
 