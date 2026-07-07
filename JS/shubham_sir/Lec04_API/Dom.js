console.log(document);

//selectors 

const ele = document.querySelector(".cl1");
console.log(ele);  //span

const eles = document.querySelectorAll(".cl1");
console.log(eles); //nodelist


const para = document.querySelector(".cl1")


// //value  getter
// console.log(ele.innerHTML);
// console.log(ele.innerText);
// console.log(ele.textContent);
   

// console.log(ele.id);
// console.log(ele.className);
// console.log(ele.classList);
// console.log(ele.getAttribute("name"));

// ele.classList.remove("cl2");
// console.log(ele.className);


// ele.classList.add("cl5");
// console.log(ele.className);


// ele.classList.add("cl2");
// console.log(ele.className);

// console.log(ele.parentElement);
// console.log(ele.parentElement.parentElement);
// console.log(ele.parentNode);
// console.log(ele.previousElementSibling);
// console.log(ele.nextElementSibling);



//create elemets
const Gautam = document.createElement("Gautam");
Gautam.style.display="block";
Gautam.style.fontSize="36px"
Gautam.innerText = "<h3>This is h3</h3>"
Gautam.innerHTML = "<h3>This is h3</h3>"

console.log(Gautam)

para.after(Gautam);
para.before(Gautam);



const div = ele.parentElement;
div.append(Gautam);
div.prepend(Gautam);