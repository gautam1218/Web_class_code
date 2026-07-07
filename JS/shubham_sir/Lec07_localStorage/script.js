
//to set data in local storage
localStorage.setItem("name","Gautam");

//to get data in local storage
console.log(localStorage.getItem("name"));

//to delete any data from local storage
localStorage.removeItem("name")


let myObj = {
    name:"Gautam",
    num:7
}

let arr = [11,22,344,555,66];
let strArr = JSON.stringify(arr);
let StrObj = JSON.stringify(myObj);

console.log(arr);
console.log(strArr);
console.log(myObj);
console.log(StrObj);

localStorage.setItem("myObj",StrObj);
localStorage.setItem("arr",strArr);
// console.log(localStorage.getItem("myOBj",myObj));


let Objdata = localStorage.getItem("myObj");
let realObj = JSON.parse(Objdata);
console.log('object ->',realObj)