// const p1 = Promise.resolve(30);  // it states a new promises
// console.log(p1);

 

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p2");
    }, 100);
});



const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("p3");
    }, 150);
});


const p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p4");
    }, 130);
});

// const results = Promise.all([p1,p2,p3,p4]);
// results.then((response)=>console.log(response)); 


// const results2 = Promise.any([p1,p2,p3,p4]);
// results2.then((response)=>console.log(response)); 


const results3 = Promise.race([p2,p3,p4]);
results3.then((response)=>console.log(response)); 