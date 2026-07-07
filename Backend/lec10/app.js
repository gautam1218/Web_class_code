const express = require("express");
const mongoose = require("mongoose");
// console.log(mongoose);

const app = express();

app.set("view engine","ejs");

mongoose.connect("mongodb://127.0.0.1:27017/Hi-Tech")
.then(()=>{
    console.log("mongoDB local wala connected")
})
.catch(()=>{
    console.log("error aa gaya...")
})


const studentSchema = new mongoose.Schema({
    name : "String",
    Age : Number,
    Course : "String"
})


//model
const Student = mongoose.model("Student",studentSchema);

app.get("/", async(req,res)=>{
    let allStudent = await Student.find();
    console.log(allStudent)

     allStudent = allStudent.filter((x)=>{
        return x.Age>19
    })


    let obj={
        "name":"Gautam",
        "age ": 20
    }

    // res.send("home page");
    // res.send(obj);
    // res.send(allStudent);
    res.render("student.ejs",{allStudent});
})

app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000...");
})
