
// console.log(module)


let express = require("express");
// console.log(express);

let app=express()
let port=4000;
// console.log(app)
// console.log(typeof(app))


app.get(("/"),(req,res)=>{
  console.log("a user is on home page...");
  console.log("helllo")
  res.send("data sent succesfully")
})


app.listen(4000,()=>{
  console.log(`app is running on ${port}`)
});