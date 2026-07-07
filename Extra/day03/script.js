
// const student = {
//     fname : "Gautam kumar",
//     age : 19,
//     city : "Muzaffarpur",
//     state : "Bihar",
//     marks : 92
// }
// console.log(student);
// console.log(student.age);
// console.log(student.state);


// const Gautam = {} //creating empty object
// Gautam.firstname = "Gautam";
// Gautam.lastname = "Kumar";
// Gautam.age = 19;

// console.log(Gautam);
// console.log(Gautam.firstname);



// const student = {
//     firstname : "Gautam",
//     lastname : "kumar",
//     age : 19,

//     fullname : function(){
//         return this.firstname+ " "+ this.lastname + " ," +this.age;
//     }
// }

// console.log(student);
// console.log(student.fullname());



// const student = {
//     fname : "Gautam kumar",
//     age : 19,
//     city : "muzaffarpur",
// }
// student["state"] = "Bihar";
// console.log(student);
// console.log(student["fname"]+" age is "+student["age"]);



// const student = {
//     fname : "Gautam kumar",
//     age : 19,
//     city : "muzaffarpur",
//     state : "Bihar",
//     marks : 92,
// }

// console.log(student);
// delete student.age; //age is deleted
// delete student.city; //city is deleted
// console.log(student);



// const student = {
//     firstname : "Gautam",
//     lastname : "kumar"
// }
// let res = "firstname" in student; // check firstname is present or not ,so return true value;
// let res2 = "fullname" in student; //return false because "fullname " is not present.
// console.log(res);
// console.log(res2);





// //nested object
// const student = {
//     fullname : "Gautam kumar",
//     age : 19,
//     city : "muzaffarpur",
//     friends : {
//         frdFullname : "kunal patel",
//         age : 20,
//         city : "kanpur",

//         Behaviour : {
//             nature : "Good",
//         }
//     }
// }

// console.log(student);
// console.log(student.friends);
// console.log(student.friends.Behaviour);




//methods
// const student = {
//     fullname : "Gautam kumar",
//     age : 19,
//     city : "muzaffarpur",
//     fname : function(){
//         // return this.fullname,this.age;
//         return this.fullname+this.age;
//         // return this.age;
//     }
    
// }
// console.log(student.fname());



// const person1 = {
//     fname : "Gautam kumar",
//     fullname :  function(){
//         return "Hello " + this.fname;
//     }
// }

// const person2 = {
//     fname : "kunal patel",
//     fullname : function(){
//         return "Hello " + this.fname;
//     }
// }

// let res = person1.fullname()+", " +  person2.fullname();
// console.log(res);



// function myfunction (){
//     return this; //this also refers to the global object.
// }
// console.log(myfunction());



// const student = {
//     fullname : "Gautam kumar",
//     age : 19,
//     city: "Muzaffarpur",
//     state : "Bihar",
//     favSub : "Mathematics",
// }
// let A = Object(student); //whole object print means key with respective values
// let B = Object.values(student); // return only values in array
// let C = Object.keys(student); // return only keys in array

// console.log(A);
// console.log(B);
// console.log(C);

// let ans = "";
// for(let val in student){
//     ans +=student[val]+",";
// }
// console.log(ans);




// const fruits = {
//     Bananas:300,
//     Oranges:200,
//     Apples:500
// };

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value +" ";
// }
// console.log(text);




// const student = {
//     fullname : "Gautam kumar",
//     age : 19,
//     city: "Muzaffarpur",
//     state : "Bihar",
//     favSub : "Mathematics",
// }
// let a = JSON.stringify(student);
// console.log(a);




// // Object Constructor Functions
// function Student (first,last,age){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
// }
// console.log(Student());




// let  arr = ["Gautam","kunal","prakhar"];
// console.log(arr);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let myList = fruits.toString();
// console.log(myList); //The toString() method returns the elements of an array as a comma separated string.
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop(); //delete one element from last
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.push("Kiwi"); //add kiwi in array, so length is inc by 1.
// console.log(length);
// console.log(fruits); 



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift(); //remove one element from first.
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon"); //add lemeon in array before firts element of array
// console.log(fruits);



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi"; //The length property provides an easy way to append a new element to an array:
// console.log(fruits);




// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);



// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi"); //first parameter where new elements should be added ,second parameter (0) defines how many elements should be removed,The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// console.log(fruits);




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 2);
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
//  console.log(citrus);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);



// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") ;
// console.log(position)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango")); // is true




// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(first);


// const temp = [27, 28, 30, 40, 42, 35, 30];
// let pos = temp.findLastIndex(x => x > 40);
// console.log(pos);



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);


// const fruits = [89,34,2,13,90];
// fruits.sort(); //sort lexografically
// console.log(fruits);



// const fruits = [89,34,2,13,90];
// fruits.toSorted(); 
// console.log(fruits);



// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
//     return b-a;
// });
// console.log(points);


// const letters = new Set(["a","b","c"]);
// console.log(letters);


const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);