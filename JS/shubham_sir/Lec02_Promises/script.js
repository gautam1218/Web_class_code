// // promises. 

// // promises ->


// const mypromises = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let num = Math.random()*10;
//         if(num < 5){
//         resolve(`this promises is fullfilled ${num}`);
//         }else{
//             reject (`this promises is rejected ${num}`)
//         }
//     }, 2000);
// });
// console.log(mypromises);

// mypromises.then((response)=>{
//     console.log(response);
// });

// mypromises.catch((error)=>{
//     console.log(error);
// })



console.log("start");

const promise = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve("Done");
    }, 1001);
});

    setTimeout(() => {
        console.log("timeout");
    }, 1000);


promise.then(function(result){
    console.log(result);
});


console.log("end");