

// var => function scope if inside the function
// var => global scope if globally define

// if(true){
//     var x=90;
//     var y=8;
//     console.log(y);

// }
// console.log(x);

// function add(){
//     //code
//     var a=67890;
// }

// console.log(a); // a is inside the function so,error show 




// display();

// function display(){
//     console.log("hello");
//     console.log(x); //undefined due to x is goes first top of the scope(fn);
//     var x=90;
//     console.log(x); ///90
// }
// console.log(x); //not defined




// console.log(x);
// for(var i=0; i<10; i++){
// 	console.log("hi");
// 	console.log(x);
// }
// var x=90;



// var x=90;
// function display(){
//     console.log(x);
//     // x++;
//     x=189;
//     console.log(x);
// }
//     display();
//     console.log(x);



let x=90;
if(true){
    console.log(x);
    var y=2;
    console.log(y);
}

console.log(x);
console.log(y);