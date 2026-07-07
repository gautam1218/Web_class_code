const express = require("express");
const mongoose = require("mongoose");
// console.log(mongoose);

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");

mongoose.connect("mongodb://127.0.0.1:27017/Hi-Tech")

// mongoose.connect("mongodb+srv://Gautam1218:Gautam1234@cluster0.mumrgwj.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("mongoDB local wala connected")
})
.catch(()=>{
    console.log("error aa gaya...")
})


const studentSchema = new mongoose.Schema({
//     name : "String",
//     Age : Number,
//     Course : "String"
    name:{
        type:String,
        required:true,
        minlength:3
    },
    Age:{
        type:Number,
        min:18,
        required:false
    },
    email:{
        type:String,
        minlength:4,
        required:true
    },
    Course:{
        type : String,
        required:true,
    },
    ip:{
        type:String,
        required:true,
        unique :true
    }
})


//model
const Student = mongoose.model("Student",studentSchema);

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/test",async(req,res)=>{
    //find()
    //find({name:"GAutam"})
    // let data = await Student.find({name:"Gautam"})


    // let data = await Student.updateMany({name:"Gautam"},{name:"Gautam kumar Singh"})
    // let data = await Student.updateOne({name:"Gautam kumar Singh"},{name:"GKS"})
    // let data = await Student.deleteMany({name:"Gautam kumar Singh"})
    console.log(data)
    res.send("bye..testing route")

})


app.get("/getdata", async(req,res)=>{
    let allStudent = await Student.find();
    console.log(allStudent)

    // allStudent = allStudent.filter((x)=>{
    //     return x.Age>19
    // })

    // res.send("home page");
    // res.send(obj);
    // res.send(allStudent);
    res.render("student.ejs",{allStudent});
})

app.get("/insertdata",(req,res)=>{
    res.render("form.ejs");
})


app.post("/createdata",async (req,res)=>{
    let obj={
        "name":"Gautam",
        "age ": 20,
        "Course" : "B-Tech"
    }
    console.log(req.body);
    req.body.ip = req.ip
    
    let data =  await Student.create(req.body);
    console.log(data);
    res.send("data saved succesfully...")
})

app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000...");
})
