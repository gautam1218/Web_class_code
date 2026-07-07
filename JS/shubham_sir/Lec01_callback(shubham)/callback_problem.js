

// //upload a file/image


// // select and upload image
// // compress image
// // upload the compressed image in DB;




// function upload(image,cb){
//     console.log("image upload started");
//     let imageUrl;
//     setTimeout(() => {
//         console.log("image uploaded");
//          imageUrl=`https://amazonweb.service.s3.bucket/${image}`;
//          cb(imageUrl,dbupload);
//     }, 2500);
// }


// function compress(imageUrl,cb){
//     console.log("compressed started");
//       setTimeout(() => {
//         console.log("image compressed");
//         const compressedUrl="https://amazonweb.service.s3.bucket/${image}/compresed";
//         cb(compressedUrl)
//     }, 4000);
// }


// function dbupload(compresed){
//     console.log("DB upload started");
//     setTimeout(() => {
//         console.log("image stored in DB",compresed);
        
//     }, 2000);
// }


// upload("https://myimage.com",compress);







function OrderFood(item,cb) {
    console.log("Order placed");
    setTimeout(() => {
        console.log("Order confirmed");
        cb(item,DeliverFood);
    }, 1000);
}

function CookFood(item,cb) {
    console.log("Cooking starts");
    setTimeout(() => {
        console.log("Cooking complete");
        let cookedItem = "Cooked " + item;
        cb(cookedItem);
    }, 2000);
}

function DeliverFood(cookedItem) {
    console.log("Delivery started");
    setTimeout(() => {
        console.log("Delivered");
        let deliveryStatus = cookedItem + " - Delivered at your door";
       console.log(deliveryStatus);
    }, 1500);
}

OrderFood("panner",CookFood);

// pass the required paramaeter in function and write the calling of functions such that it will run synchronously