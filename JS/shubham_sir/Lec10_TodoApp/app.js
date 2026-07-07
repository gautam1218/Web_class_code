const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");
const {v4 : uuidv4} = require("uuid");

let TODOS = [];
//{
// id : TODO.length
// task:"cooking at 5pm"
//status: true/false
//      true -> active,  false -> completed
// createAt: Date.now()
// }


app.use(express.static(path.join(__dirname,"public")));
app.use(express.json()); //convert body data back to json
// app.use

app.get("/",(req,res)=>{
    try{
        res.status(200).json({todos:TODOS});
    }catch(error){
        console.log(error);
        res.status(500).json({Message:error.Message});
    }
})


app.post("/todo/create",(req,res)=>{
    try{
    // console.log(req.body)
     const task = req.body.task;
    const todo ={
        id:uuidv4(),
        task:task,
        ststus:true,
        createAt: new Date().toLocaleDateString()
    }
    TODOS.unshift(todo);
    res.status(201).json({messge:"Todo Craeted",todos:TODOS})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
})


app.delete("/todo/:id/delete",(req,res)=>{
    try{
        const id = req.params.id;
        TODOS = TODOS.filter((todo)=>{
            return todo.id !== id;
        })
        res.status(202).json({message:"Todo DEleted",todos:TODOS})
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
})


app.put("/todo/:id/update",(req,res)=>{
    try {
        const id = req.params.id;
        TODOS = TODOS.map((todo)=>{
            if(todo.id === id){
                todo.status = !todo.status;
            }
            return todo;
        })
        res.status(202).json({message:"Todo updated",todos:TODOS})
    } catch (error) {
         console.log(error);
        res.status(500).json({message:error.message})
    }
})

app.get("/todo/filter",(req,res)=>{
    try {
        const filter = req.query.filter;
        const todos = TODOS.filter((todo)=>{
            if(filter == "completed"){
                return todo.status==false;
            }
            return todo.status !== false;
        })
    res.status(200).json({message:"Todo filtered",todos:todos})
    } catch (error) {
         console.log(error);
        res.status(500).json({message:error.message})
    }
})


app.listen(PORT,()=>{
    console.log("server is started at",`http://localhost:${PORT}`)
})