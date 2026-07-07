const { error } = require('console');
const fs=require('fs');


//sync -> blocking operations
// let result=fs.readFileSync('file.txt',"utf8");
// console.log(result);


//async ->non-blocking opeations
fs.readFile("file.txt","utf8",(error,data)=>{
    if (error) {
        throw error
    }
    else{
        console.log(data);
    }
})

console.log("hello")