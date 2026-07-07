let data ={
    "name":"Gautam kumar",
    "age" : 19
}

console.log(typeof(data))
data = JSON.stringify(data);
console.log(data)
console.log(typeof(data))


data = JSON.parse(data); 
console.log(typeof(data)); //object