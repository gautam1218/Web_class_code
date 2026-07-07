

// console.log("start");

// function wait (time){
//     const now = new Date().getTime();
//     while(new Date().getTime()<= now+ time){}
//             console.log("time ended");
    
// }

// wait (5000);

// setTimeout(() => {
//     console.log("hello");
// }, 2000);


const id = setInterval(()=>{
    console.log("interval");
},0);


setTimeout(()=>{
    clearInterval(id);
},6000);

console.log("end");