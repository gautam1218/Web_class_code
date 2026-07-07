
async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    return data;
}
getPosts().then((data)=>console.log(data));     //return an array
 




async function getSinglePosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    return data;
}
getSinglePosts().then((data)=>console.log(data));  //return an object
