// console.log(add);

// var add=()=>{
//     console.log("hi");
//     console.log("hey");
// }

// console.log(add);




// let add=(a,b)=>{
// return a+b;
// }
// console.log(add(2,4));

 
// let add=(a,b)=>a+b; //by default return hota hai;
// console.log(add(2,4));



// let arr=[7,"Gautam","S.A",true,()=>{},65];
// //array hetro in nature
// console.log(arr);
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// let arr=[7,"Gautam","S.A",true,()=>{},65];
// arr.push(11); //add 11 from last
// console.log("before :",arr);
// arr.pop(); //remove last element
// console.log("after : ",arr);
// arr.shift(); //remove one element from starting
// console.log(arr);
// arr.unshift("Kunal");
// console.log(arr); //add one element from first



// let fruits=["mango","ornage","grapes","apple","lemon"];

// let myfruits=fruits.slice(1,3); //first input include last input exclude
// console.log(fruits);
// console.log(myfruits);
// console.log(fruits.splice(1,2,"banana","papaya"));
// console.log(fruits);




// let arr =[7,"Gautam","S.A",true,()=>{},65,[34,23,12]];
// // for(const element of arr){
// //     console.log(element);
// // }
// console.log(arr[7][1]);



//objects

let gautam={
    fname:"Gautam kumar",
    age:19,
    dist:"muzaffarpur",
    college:"mirai school of tecnology",
    payment:()=>{
        console.log("completed");
    },
    address:{permanenrt:{
        dist:"Muzaffarpur",
        state:"Bihar",
    },
    temporary:{
        dist:"Ghaziabad",
        state:"Uttarpradesh",
    }
},"last Name":"Kumar",
" ":12345,
"":12345678,
}


// gautam.school="UCHCH MADHYAMIK VIDYALAY RAJKHAND NORTH";
// console.log(gautam);

// gautam.fullname="Gautam kumar";
// console.log(gautam);


// console.log(gautam); //body of main fn;
// console.log(gautam.payment());
// console.log(gautam.address.permanenrt.dist);//muzaffarpur
// console.log("college:",gautam.college);
// console.log("age:",gautam.age);
// console.log("dist:",gautam.dist);
// console.log("name:",gautam.fname);
// console.log("lastname:",gautam["last Name"])
// console.log(gautam[" "])
// console.log(gautam[""])


// for(let key in gautam){
//     console.log(key,gautam[key]);
// }


//  let arr=[7,"Gautam","S.A",true,()=>{},65];
//  for(let key in arr){
//     console.log(key,arr[key]);
//  }
//  console.log(arr[2]);
//  console.log(typeof arr);




// let arr=[23,24,25,35,67,68,89,90];
// // console.log(arr);

// let deletelement=arr.splice(2,3,10,20,30);
// console.log(deletelement);



// function display(a,b){
// console.log(a);
// console.log(b);
// }
// let x=24,y=78;
// display(x,y);


// function display(a,b){ //here display is higher order function
//     console.log(a);
//     console.log(b);
//     let ans=a(2);
//     console.log(ans);

// }

// let x=(k)=>{
//     console.log("mirai");
//     console.log("school");
//     return k*k;
// }

// let y=25;

// display(x,y);
// // display(x(),y);




// function outer(){
//     let a=90;
//     let inner=()=>{
//         console.log("hi");
//         console.log("hello");
//     };
//     return inner;   
// }
// let ans=outer();
// console.log(ans);




// lexicial environment

// function display(){
//     let a=90;
//     let b=10;

// let sum=()=>{
//     console.log(a+b);
//     return a*b;
// }
// return sum;

// }

// let ans=display();
// console.log(ans);
// ans();





function counter (){
    let count=0;
    return function (){
        count++;
        console.log(count);
    }
}

let Gautam=counter();
Gautam(); //1
Gautam(); //2
Gautam(); //3
Gautam(); //4
Gautam(); //5
Gautam(); //6


let SA=counter();
SA(); //1
SA(); //2