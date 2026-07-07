const express = require("express");
const app = express();
// const fs = require("fs");

const data = require("./data.json");
// console.log(data);
// console.log(data[0],data[5],data[21],data[200]);
console.log(data[0],data[1],data[2]);


app.use((req,res,next)=>{
    console.log(`${req.url} running middleware 1`);

    next();
})


// app.get("/",(req,res)=>{
//     res.send({
//     "name":"Gautam kumar",
//     "age" : 19
//     })
// })

// app.get("/",(req,res)=>{
//     // res.send(data);
//     res.send([
//         data[0],
//         data[5],
//         data[21],
//         data[200]
//     ])
// })


app.get("/",(req,res)=>{
    res.json({
        first:data[0],
        second:data[1],
        third:data[2]
    })
})

app.listen(3000,()=>[
    console.log("server is running at 3000")
])



