const express = require("express")
const app = express()

//middleware fn ke four argumnet hote hai ->  error(optional),req,res,next
app.use((req,res,next)=>{
    let out = `url = ${req.url} and address is ${req.ip}`;
    console.log(out);
    next();
})

app.use((req,res,next)=>{
console.log("middleware 1 responsble for mobile auth");
//authentication
let auth = true;
if(!auth){
res.send("mobile auth failed try again");
}
else {
    next();
}
})




app.use((req,res,next)=>{
console.log("middleware 2 responsoble for email auth");
//authentication
let auth = true;
if(!auth){
res.send("email auth failed try again");
}
else {
    next();
}
})



app.get("/",(req,res)=>{
    res.send("home page...")
})


app.post("/detailes",(req,res)=>{
    console.log("detail wale route");
    console.log(req.body);

    res.send("data saveed...")
})

app.get("/about",(req,res)=>{
    res.send("about...")
})


app.use((req,res,next)=>{
    res.send("404 not found")
})

app.listen(3000,()=>{
    console.log(`server is running at 3000`);
})