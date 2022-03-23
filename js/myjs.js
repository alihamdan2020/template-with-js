//check local storage color-optin if it empty
let localStorageColor=localStorage.getItem("color-option");
if(localStorageColor!=null)
document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option"));

// var landing = document.getElementById("landing"); this is er5 old version

// this is new declaration in javascript er6
let landing = document.querySelector(".landing");

let array_picture = ["01.jpg", "02.jpg", "03.jpg","04.jpg","05.jpg"];

// to create a random variable between 0 and 3 (the length of array)



// in old version of js we wrote function as
//setInervat(function() {..........}


setInterval(() => {
  let random_value = Math.floor(Math.random() * array_picture.length);
  landing.style.backgroundImage = 'url(images/' + array_picture[random_value] + ')';
  //console.log(random_value);
}, 3000);



//show landing text (heading + paragraph) in loading

function jmjm() {
let landing_text=document.getElementById("landing-text");
landing_text.classList.add("showLanding");
//alert(landing_text);
}



//  function show_setting_box() {
//    document.querySelector(".setting-box").style.left="0px";
//  }
//the syntax above is old fashion how to write function
// core of function, exist after =>
//as our function has no argument we srote funnctionname =()
//if i have argument , should write functionname =(a,b)

document.querySelector(".gear-container .fa-cog").onclick = () => {
  document.querySelector(".gear-container .fa-cog").classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
}


//create an array that take all the li's that name link-color from ul that name colors

var div = document.getElementById("ul-colors");
var nodes = div.getElementsByTagName("li");
let newArray=Array.from(nodes);
//console.log(newArray);
//console.log(Array.isArray(newArray));

newArray.forEach(function(li){

  li.addEventListener("click",function(){

    document.documentElement.style.setProperty("--main-color",this.getAttribute("data-color"));
    localStorage.setItem("color-option",this.getAttribute("data-color"));

  });

});

// //loop foreach  pass in all array above
//  a.forEach(li => {
//    li.addEventListener("click",(e) =>{
// //    //console.log(e.target.dataset.color));
// //    //note : dataset mean attribute, not obligtory been color, according to attribute data-color
// //    //if arrtibute was dat-id, than e.target.dataset.id
//     document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
//     localStorage.setItem("color-option",e.target.dataset.color);}
//    );
//  });


//  //code below is old way that test each li itself
// let a = document.getElementsByClassName("link-color");
// let colorMain="rgb(255,140,0)"; 

// a[0].onclick= ()=> {
//   colorMain=a[0].getAttribute("data-color");
//   document.documentElement.style.setProperty("--main-color",colorMain);
//  }

//  a[1].onclick= ()=> {
//   colorMain=a[1].getAttribute("data-color");

//    document.documentElement.style.setProperty("--main-color",colorMain);
//  }
//  a[2].onclick= ()=> {
//   colorMain=a[2].getAttribute("data-color");
//   document.documentElement.style.setProperty("--main-color",colorMain);
//  }

//  a[3].onclick= ()=> {
//   colorMain=a[3].getAttribute("data-color");
//   document.documentElement.style.setProperty("--main-color",colorMain);
//  }

//  a[4].onclick= ()=> {
//   colorMain=a[4].getAttribute("data-color");
//   document.documentElement.style.setProperty("--main-color",colorMain);
//  }
 
// assume array below a response from server

let fullArray =[
  {
  "productName":"pepsi",
  "productPrice":"20$",	
  "img":"1.jpg"
  },
  {
    "productName":"cocacola",
  "productPrice":"10$",
  "img":"2.jpg"
  },
  {
  "productName":"kitkat",
  "productPrice":"15$",
  "img":"3.jpg"
  }];

  
for(let k=0;k<3;k++)
{
  // create div that hold the product card
let productDiv=document.createElement("div");
productDiv.className="product_card";

//create heading to hold prouct name
let productTitle=document.createElement("h3");
productTitle.setAttribute("class","prod_title");
productTitleText=document.createTextNode(fullArray[k]["productName"]);
productTitle.appendChild(productTitleText);

//create image of proucts
let productImage = document.createElement("img");
productImage.setAttribute("src","images/" + fullArray[k]["img"]);
productImage.setAttribute("class","prod_img");


// create span that holds price
let productPrice=document.createElement("span");
productPrice.setAttribute("class","prod_price");
productPriceText=document.createTextNode(fullArray[k]["productPrice"]);
productPrice.appendChild(productPriceText);

productDiv.appendChild(productTitle);
productDiv.appendChild(productImage);
productDiv.appendChild(productPrice);

let test=document.getElementById("container-products");
test.appendChild(productDiv);
}