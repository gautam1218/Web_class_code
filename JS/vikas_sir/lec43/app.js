// function fact(n){
//     if(n<1)
//         return 1;
//     return n*fact(n-1);
// }

// // let ans=fact(10);
// // console.log(ans);


// function memo(fn){
//     let cache={};
//     return function (n){
   
//     if(cache[n]){
//         return cache;
//     }else{
//         cache[n]=fn[n]; //calculate ans store in cache the return
//         return cache[n];
//         }
//     }
// }


// let factorial=memo(fact);
//     let ans=factorial(5);
//     console.log(5);




// function ficco(n){
//     let a=0,b=1,c=0;
//    for(let i=0; i<n; i++){
//     if(i==0 || i==1){
//         return i;
//     }else{
//         c=a+b;
//         b=a;
//         a=c;
//     }
//    }
// }

// function memo(ficco){
//     let cache={};
//     return function (n){
   
//     if(cache[n]){
//         return cache;
//     }else{
//         cache[n]=ficco[n]; //calculate ans store in cache the return
//         return cache[n];
//         }
//     }
// }


// let ans=ficco();
// console.log(ans);





//currying

// function add(a,b,c){
//     return a+b+c; 
// }

// let ans=add(2,3,4);
// // let ans=add(2)(3)(4);
// console.log(ans);






// function sum(a){
//     return function(b){
//         return function(c){
//         return a+b+c;

//         }
//     }
// }
// let ans=sum(2344)(23)(23);
// console.log(ans)






// function sum(a){
//     return function(b){
//         return function(c){
//         return a*b*c;

//         }
//     }
// }
// let res=sum(2)(2)(23);
// console.log(res)





function add(num){
    if(!num){
        return 0;
    }else{
        return function helper(v){
            //base case
            if(!v){
                return num;

                //recursive case
                num +=v;
                return helper;
            }
        }
    }
}
console.log(add(5));