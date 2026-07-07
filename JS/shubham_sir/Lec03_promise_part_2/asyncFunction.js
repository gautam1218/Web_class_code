const p1 = new Promise((reolve,reject)=>{
    setTimeout(() => {
        console.log("hello");
    }, 2000);
})

// console.log("start");

// async function fun() {
//     console.log("async start");
//     const response = await p1;
//     return response;
// }

// const ans = fun();
// console.log(ans);



async function fun() {
    const response = await p1;
    return response;
}

let data = await fun();
console.log("module-type",data);

// await fun(). // we cant use await outside async fun(it will no effect)
  
// fun().then((data)=>console.log(data)).catch((err)=>console.log(err));

async function fun2() {
    const data = await fun();
    console.log(data);
}