//spinner
let spin=document.getElementsByClassName("spinner");
let main_to_show=document.getElementsByClassName("main-to-show");
setTimeout(function() {
	
	spin[0].style.opacity="0";
	main_to_show[0].style.display="block";
},3000);


//check local storage color-optin if it empty
let localStorageColor = localStorage.getItem("color-option");
if (localStorageColor != null)
  document.documentElement.style.setProperty("--main-color", localStorage.getItem("color-option"));


//  section to change background  
let landing = document.querySelector(".landing");

let array_picture = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// to create a random variable between 0 and 3 (the length of array)
let test_counter = 0;
//select button ues or no inside settings box for choose random background or not
let settingsBackground = document.getElementsByClassName("choose-background");
let showBackground = true;
let intervalValue;


settingsBackground[0].onclick = function () {
  showBackground = true;
  changeBackground();
  settingsBackground[0].classList.add("active");
  settingsBackground[1].classList.remove("active");

  localStorage.setItem("localBackChoice", showBackground);
}

settingsBackground[1].onclick = function () {
  showBackground = false;
  clearInterval(intervalValue);
  settingsBackground[1].classList.add("active");
  settingsBackground[0].classList.remove("active");

  localStorage.setItem("localBackChoice", showBackground);
}

if (localStorage.getItem("localBackChoice") == "true") {
  showBackground = true;
}
else {
  showBackground = false;
}

if (showBackground == true)
  changeBackground();
else
  clearInterval(intervalValue);


function changeBackground() {
  if (showBackground == true) {
    intervalValue = setInterval(() => {
      landing.style.backgroundImage = 'url(images/' + array_picture[test_counter] + ')';
      test_counter++;
      if (test_counter % 5 == 0) {
        test_counter = 0;
      }
      //console.log(test_counter);
    }, 1000);
  }

}

//burger section
let burger = document.querySelector("#burger");
let menuResponsive = document.querySelector(".header .main-menue");
let clickedStatus = "yes";
burger.onclick = function () {
  menuResponsive.classList.add("showMenuResponsive");
  if (clickedStatus == "yes") {
    menuResponsive.style.display = "flex";
    clickedStatus = "no";
  }
  else {
    menuResponsive.style.display = "none";
    clickedStatus = "yes";
  }


}


//show landing text (heading + paragraph) in loading
function jmjm() {
  let landing_text = document.getElementById("landing-text");
  landing_text.classList.add("showLanding");
}



//active link by hover mouse
let menuLink = document.querySelectorAll(".main-menue-link");


menuLink.forEach(function(a){

a.addEventListener("mouseenter",function(){
 
  menuLink.forEach(function(a){
    a.classList.remove("active");
  });

  this.classList.add("active");
})
});





//setting gear icon
document.querySelector(".gear-container .fa-cog").onclick = () => {
  document.querySelector(".gear-container .fa-cog").classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
}


//create an array that take all the li's that name link-color from ul that name colors

var div = document.getElementById("ul-colors");
var nodes = div.getElementsByTagName("li");
let newArray = Array.from(nodes);

newArray.forEach(function (li) {

  li.addEventListener("click", function () {

    document.documentElement.style.setProperty("--main-color", this.getAttribute("data-color"));
    localStorage.setItem("color-option", this.getAttribute("data-color"));

  });

});


// assume array below a response from server, to create projects sections

let fullArray = [
  {
    "projectName": "project 1",
    "projectWeb": "https://alihamdan2020.github.io/Kasper-Template",
    "img": "1.jpg"
  },
  {
    "projectName": "project 1",
    "projectWeb": "https://alihamdan2020.github.io/Kasper-Template",
    "img": "1.jpg"
  },
  {
    "projectName": "project 1",
    "projectWeb": "https://alihamdan2020.github.io/Kasper-Template",
    "img": "1.jpg"
  },
  {
    "projectName": "project 1",
    "projectWeb": "https://alihamdan2020.github.io/Kasper-Template",
    "img": "1.jpg"
  },
  {
    "projectName": "project 2",
    "projectWeb": "https://alihamdan2020.github.io/Leon-Template/",
    "img": "2.jpg"
  },
  {
    "projectName": "project 3",
    "projectWeb": "https://alihamdan2020.github.io/Hamdan/",
    "img": "3.jpg"
  },
  {
    "projectName": "project 2",
    "projectWeb": "https://alihamdan2020.github.io/Leon-Template/",
    "img": "2.jpg"
  },
  {
    "projectName": "project 2",
    "projectWeb": "https://alihamdan2020.github.io/Leon-Template/",
    "img": "2.jpg"
  }];


for (let k = 0; k < fullArray.length; k++) {
  // create div that hold the product card
  let productDiv = document.createElement("div");
  productDiv.className = "product_card";

  //create heading to hold prouct name
  let productTitle = document.createElement("h3");
  productTitle.setAttribute("class", "prod_title");
  productTitleText = document.createTextNode(fullArray[k]["projectName"]);
  productTitle.appendChild(productTitleText);

  //create image of proucts
  let productImage = document.createElement("img");
  productImage.setAttribute("src", "images/" + fullArray[k]["img"]);
  productImage.setAttribute("class", "prod_img");


  // create link that holds url
  let productPrice = document.createElement("a");
  productPrice.setAttribute("class", "prod_price");
  productPrice.setAttribute("target", "_blank");
  productPrice.setAttribute("href", fullArray[k]["projectWeb"]);


  let iconWeb = document.createElement("i");
  iconWeb.setAttribute("class", "fas fa-globe");
  productPrice.appendChild(iconWeb);


  productDiv.appendChild(productTitle);
  productDiv.appendChild(productImage);
  productDiv.appendChild(productPrice);

  let test = document.getElementById("container-products");
  test.appendChild(productDiv);
}

//move the images of teams
let left_arrow = document.getElementById("left-arr");

let right_arrow = document.getElementById("right-arr");
let team_container = document.getElementById("team-container");
let member = document.getElementById("member");

var leftPos = 0;
var counterClickLeft = 0;

left_arrow.onclick = function () {
  //alert(member.style.marginLeft);
  //1512 for the small screen mobile
  if (member.style.marginLeft == "-1550px" || member.style.marginLeft == "-1512px") {
    member.style.marginLeft = "0px";
    var dimension = 0;
  }
  else
    var dimension = parseInt(getComputedStyle(member).marginLeft) - parseInt(getComputedStyle(member).width) - 110;
  member.style.marginLeft = `${dimension}px`;
  member.style.transition = "0.5s";
};

right_arrow.onclick = function () {
  var dimension = parseInt(getComputedStyle(member).marginLeft) + parseInt(getComputedStyle(member).width) + 110;
  if (getComputedStyle(member).marginLeft != "0px")
    member.style.marginLeft = `${dimension}px`;

};

//button to move image to up
let buttonToUp = document.getElementById("btnToUp");
let teamtSection = document.getElementById("main-team-container");

buttonToUp.onclick = () => document.documentElement.scrollTop = 0;

window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {
  if (window.scrollY > 400)
    buttonToUp.style.display = "block";
  else
    buttonToUp.style.display = "none";


  function changeArrowPosition(element) {
    //element.style.top="50%";
    //element.style.opacity="1";
    element.classList.add("changeArrowPosition");
  }

  if (document.documentElement.scrollTop > 1300) {
    teamtSection.style.opacity = "1";
    teamtSection.style.transition = "2.5s";

    changeArrowPosition(left_arrow);
    changeArrowPosition(right_arrow);
  }

  if (document.documentElement.scrollTop > 1800) {
    let clientCounter = document.getElementsByClassName("client-number");
    functionTimerStatistic(clientCounter[0],121,0);
    functionTimerStatistic(clientCounter[1],20,1);
    functionTimerStatistic(clientCounter[2],70,1);
  
    let imgStat=document.querySelector(".satisfImg");
    imgStat.style.right="10px";
    imgStat.style.transition="5s";
    imgStat.style.opacity="0.9";
  }

  


}

//section below to make opposite of keyframe when hover image
let teamImage = document.getElementsByClassName("imgTeam");
let teamImageArray = Array.from(teamImage);
let teamInfo = document.getElementsByClassName("memberInfo");
let teamInfoArray = Array.from(teamInfo);

teamImageArray.forEach(function (img, e) {
  //e mean index of img
  img.addEventListener("mouseleave", function () {
    teamInfoArray[e].classList.add("outAnimation");
  })
})



function functionTimerStatistic(a,b,status) {
  let stopTimer = setInterval(function () {
    if (a.textContent == b && status==1){
      a.innerHTML=a.innerHTML+"K";
      clearInterval(stopTimer);
    }
 
    if (a.textContent < b)
      a.textContent = parseInt(a.textContent) + 1;
  }, 10)
}