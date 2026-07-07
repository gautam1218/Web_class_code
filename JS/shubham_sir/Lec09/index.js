const express = require("express");
const app = express();
const PORT = 4000;



//query params
app.get("/search",(req,res)=>{
    const query = req.query;
    console.log(query);
    res.send("query recived",query);
})

app.get("/user/:id/data",(req,res)=>{
    const params = req.params;
    console.log(params);
    res.send("params recived",params);
})

// it's a middleware to convert the encript data in body back to json
app.use(express.json());

// it's a middleware to convert the encripted data in body(form data) to object
app.use(express.urlencoded({extended:true}))

app.post("/user/create",(req,res)=>{
    const body = req.body;
    console.log(body);
    // res.send("body recived",body);
    // res.json("body recived",body);  Wrong ->json is always object
    res.json({message:"body recived",data:body});
})


//start server, port -> mapping of process in system
app.listen(PORT,()=>{
    console.log("server is started at",`http://localhost:${PORT}`)
})
