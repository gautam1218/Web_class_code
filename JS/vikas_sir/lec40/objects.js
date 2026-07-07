

// let Gautam={
//     fname:"Gautam kumar",
//     age:19,
//     college:"Mirai school of technology",
// };


// let {fname,age:myage,college,dist="Muzaffarpur"}=Gautam;
// console.log(myage);
// console.log(college);
// console.log(dist);



// let  bankaccount=()=>{
//     let balance=0;
//     let deposite=(amount)=>{
//        balance+=amount;
//     }
//     let withdraw=(amount)=>{
//     balance=amount;
//     }
//     let mybalance=()=>{
//         console.log(balance);
//     }
//     return {deposite,withdraw,mybalance};
// }

// let Gautam=bankaccount();
// Gautam.deposite(20000000);
// Gautam.withdraw(1000000);
// Gautam.mybalance();

// let Kunal=bankaccount();
// Kunal.deposite(20000);
// Kunal.withdraw(10);
// Kunal.mybalance();



// let cart=()=>{
//     currentcart=0;
//     let additems=(products)=>{
//         currentcart.push(products);
//     }
//     let removeitems=(products)=>{
//         currentcart.pop(products);
//     }
// }

// let     CART=cart();
//         CART.additems("Shoes");
//         CART.removeitems("watches");



// function cart(){
//     let arr=[];
//     return {
//         "additems"=
//     }

// }



// let arr=[23,2,45,67];
// let brr=[23,100,150];

// let ans=[...arr,...brr,189]; //spread
// console.log(ans);


// function display(...arr){
//     console.log(arr);
// }
// let arr=[];
// display(1,4,3,5,6,7,88,0,2);



// let arr=[1,3,7,90,673,80];
// let element=7;
// let idx=arr.indexOf(element);
// console.log(idx);

// arr.splice(idx,1);
// console.log(arr);



// let fname="Gautam kumar"
// let age=19;
// // let message="hello everyone my name is Gautam kumar and age is 19";
// let message=`hello everyone my name is ${fname} and age is ${age}`;
// console.log(message)


// let city="Muzaffarpur";
// let state="Bihar";
// let country="India";

// let location=`my city is ${city},state is ${state} and country is ${country}`;







// // find the largest element in the array;
// let arr=[3,4,3,9];
// let max=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);






// //  Find the smallest element in an array.
// let arr=[3,4,3,9];
// let min=10;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(min);



// //Reverse an array without using extra array.
// let arr=[3,4,3,9];
// for(let i=arr.length;i>=0;i--){
//     console.log(arr[i]);
// }



// //Check whether an array is sorted or not.
// let arr=[3,4,3,9];
// let flag=1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<arr[i+1]){
//         flag=0;
//     }
// }
// if(flag==0){
//      console.log("false");
// }
// else {
//      console.log("True");
// }


// //Count total even and odd numbers in an array.
// let arr=[3,4,3,9];
// let A=0;
// let B=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         A++;
//     }
//     else{
//       B++;
//     }
// }
// console.log(A);
// console.log(B);



// //Find the sum of all elements of an array.
// let arr=[3,4,3,9];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum);


// //Find the index of a given element in an array.
// let arr=[3,4,3,9];
// let j=4;
// let g;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==j){
//      g=i;
//     }
// }
// console.log(g);

//  Count frequency of each element in an array.

// // Remove duplicate elements from a sorted array.
// let a=[2,2,3,4,5,5,6,6,7];
// for(let i=0;i<a.length;i++){
//     if(a[i]!=a[i+1]){
//         console.log(a[i]);
//     }
// }



//  **(use indexOf and splice)**
//  Move all zero elements to the end of the array.



let cart=()=>{
    let arr=[];
    let add=(name)=>{
        arr.push(name);return arr;
    }
    let remove=(remove)=>{
        arr.pop(); return arr;
    }
    let clearlist=()=>{
       arr.splice(0,arr.length);
    }
    let getcartitem=()=>{
        return arr;
    }
    return {add,remove,clearlist,getcartitem};
}
let item=cart();
console.log(item.add("shoes"));
console.log(item.add("mobilePhone"));
console.log(item.add("Labtop"));
console.log(item.add("watches"));
console.log(item.remove("shoes"));
console.log(item.arr);
console.log(item.clearlist())