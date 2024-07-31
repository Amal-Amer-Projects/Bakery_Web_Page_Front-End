
//check if there is local storage color option
let mainColors=localStorage.getItem("color_option");

if(mainColors!==null){
console.log("not empty");
document.documentElement.style.setProperty('--main-color',mainColors);
//remove active class from all colors list items
document.querySelectorAll(".colors-list li").forEach(element=>{

  element.classList.remove("active");
   //Add Active class on Element with data color==local storage item
   if(element.dataset.color==mainColors){

// add class active
element.classList.add("active");




   }
  
  });
 


}
// Random background option

let backgroundOption=true;
//  variable to control interval 
let backgroundInterval;


// Toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick=function(){
//Toggle Class Fa-spin For Rotation on self
this.classList.toggle("fa-spin");
// Toggle Class Open On Main Settings box
document.querySelector(".settings-box").classList.toggle("open");



};

// Switch colors

const colorsli=document.querySelectorAll(".colors-list li");
// Loop on every list item
colorsli.forEach(li => {
  // click on Every list Item
  li.addEventListener("click",(e)=>{

console.log(e.target.dataset.color);

// Set color on root
document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
// Set color in local storage
localStorage.setItem("color_option",e.target.dataset.color);

//remove active class from all childrens
handleActive(e);
});

});

//  Random Background section
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Switch Backgrounds

const randomBack=document.querySelectorAll(".random-backgrounds span");
// Loop on all span
randomBack.forEach(span => {
  // click on Every span
  span.addEventListener("click",(e)=>{


//remove active class from all childrens
handleActive(e);
// add active class on target (when clicking the buttons)
e.target.classList.add("active");
if (e.target.dataset.background === 'yes') {

  backgroundOption = true;

  randomizeImgs();
localStorage.setItem("background-option",true);


} else {

  backgroundOption = false;
  console.log( backgroundOption);
  clearInterval(backgroundInterval);
  localStorage.setItem("background-option",false);

}

});

});

//  check if there is local storage background item
let backgroundlocalItem=localStorage.getItem("background-option");
// check if random background local storge is not empty

if(backgroundlocalItem!=null){
  document.querySelectorAll(".random-backgrounds span").forEach(element=>{

    element.classList.remove("active");
    
    });


if(backgroundlocalItem==='true'){

  backgroundOption=true;
  document.querySelector(".random-backgrounds .yes").classList.add("active");

}else{
   backgroundOption=false;
   document.querySelector(".random-backgrounds .no").classList.add("active");

  }
}

//Select Landing page Element

let landingPage = document.querySelector(".landing-page");

//get Array of images

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];



//Function to randomize images'

function randomizeImgs() {

   if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url 
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 1000);

   }

}

 randomizeImgs();

// Skills selector
let ourSkills = document.querySelector(".skills");
let ourlinks = document.querySelector(".links-container");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  // links Offset Top
  let linksOffsetTop = ourlinks.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  //links Outer Height
  let linkssOuterHeight = ourlinks.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;
  // Window Height for stick image
  let windowHeight1 = this.innerHeight;
// Window ScrollTop
let windowScrollTop =  this.pageYOffset;
  // Window ScrollTop for stick image
  let windowScrollTop1 =  this.pageYOffset;
 
  
  let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
  let stickimg = document.querySelector(".stick-logo");
// To fill bar
  if (windowScrollTop >=( skillsOffsetTop + skillsOuterHeight - windowHeight) ){
  
    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  } 

  //to remove bar in case going out the specifiec section
   if (windowScrollTop <(skillsOffsetTop - skillsOuterHeight)||windowScrollTop >(skillsOffsetTop + skillsOuterHeight)){

    allSkills.forEach(skill => {

      skill.style.width = 0;

    });


  }
// To make stick image appear
if (windowScrollTop1 >=( linksOffsetTop + linkssOuterHeight)){
  
  stickimg.style.display ='block';
} 
if (windowScrollTop1 ==0){
  stickimg.style.display ='none';

}


};


// ///////////////////////////////////////////// pop up image section/////////////////////////////////////////////////
// create pop up with image
let ourGallery=document.querySelectorAll(".gallery img");
let popupBox;
let popupImage;
let current ;
let imgText;

ourGallery.forEach((img,index) => {
img.addEventListener('click',(e) =>{
 current=index;
 // create overlay element
let overlay=document.createElement("div");
// add class to overlay

overlay.className='popup-overlay';

// append overlay to body

document.body.appendChild(overlay);
// create the popup box

 popupBox=document.createElement("div");

// add class to popup box
popupBox.className='popup-box';


if(Image.alt!==null){

  // create heading
  let imageHeading=document.createElement("h3");
  // create text for heading
   imgText=document.createTextNode(img.alt);
  
  // Append The text to the Heading
  imageHeading.appendChild(imgText);
  // Append to the pop up box
  popupBox.appendChild(imageHeading);
  
  }
// Create the image
 popupImage=document.createElement("img");
// set image source
popupImage.src=img.src;
// Add image to popup box 
popupBox.appendChild(popupImage);
// append popup box to body
document.body.appendChild(popupBox);
// create close span
let closeButton=document.createElement("span");
// create the close button text
let closeButtonText=document.createTextNode("X");
// append text to close button
closeButton.appendChild(closeButtonText);
// Add class to close button
closeButton.className='close-button';
// add close button to the pop up box
popupBox.appendChild(closeButton);


// create left button div
let leftButtonDiv=document.createElement("div");
leftButtonDiv.className='slide slide-left';

// create left button
let leftButton=document.createElement("span");
// create the left button text
let leftButtonText=document.createTextNode("");
// append text to left button
leftButton.appendChild(leftButtonText);
// Add class to left button
leftButton.className='fa fa-angle-left';
// add leftButton to leftButtonDiv
leftButtonDiv.appendChild(leftButton);
// add left button to the pop up box
popupBox.appendChild(leftButtonDiv);

//////////////////////////////////////
// create Right button div
let RightButtonDiv=document.createElement("div");
RightButtonDiv.className='slide slide-right';

// create Right button
let RightButton=document.createElement("span");
// create the Right button text
let RightButtonText=document.createTextNode("");
// append text to Right button
RightButton.appendChild(RightButtonText);
// Add class to Right button
RightButton.className='fa fa-angle-right';
// add RightButton to RightButtonDiv
RightButtonDiv.appendChild(RightButton);
// add Right button to the pop up box
popupBox.appendChild(RightButtonDiv);



});


});


document.addEventListener("click",function (e){
// close popup
if(e.target.className=='close-button'){

// remove the current popup
e.target.parentNode.remove();
// remove overlar
document.querySelector(".popup-overlay").remove();

}
// view to previous image
if(e.target.className=='fa fa-angle-left' ||e.target.className=='slide slide-left' ){
  
  if (current === 0) {
    current = ourGallery.length;
  }
 
 
    popupImage.alt=ourGallery[current - 1].alt;
  // change alt for image
   imgText.nodeValue=popupImage.alt;
    
    popupImage.src= ourGallery[current - 1].src;
   
    popupBox.appendChild(popupImage);

  current--;

}
if(e.target.className=='fa fa-angle-right' ||e.target.className=='slide slide-right'){
  if (current === ourGallery.length - 1) {
    current = -1;
  }

 popupImage.alt=ourGallery[current + 1].alt;
 
// change alt for image
  imgText.nodeValue=popupImage.alt;
  
  popupImage.src= ourGallery[current + 1].src;
  popupBox.appendChild(popupImage);
  current++;

}

});
  
// select all bullets
const allBullets=document.querySelectorAll(".nav-bullets .bullet");
const allLinks=document.querySelectorAll(".links a");
const stickimg=document.querySelectorAll(".stick-logo img");

function scrollLinks(elements){

  elements.forEach(ele=>{
  ele.addEventListener("click",(e)=>{
    e.preventDefault();
    
      document.querySelector(e.target.dataset.section).scrollIntoView({behavior:"smooth"
    
    
    });
    
    
    });
    
    
    });
    
}

 
scrollLinks(allBullets);
scrollLinks(allLinks);
scrollLinks(stickimg);
// Handel active stat
function handleActive(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach(element=>{

    element.classList.remove("active");
    
    
    });
    // add active class on target
    ev.target.classList.add("active");
    
}
// 
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });
if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

  }

}


bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';
localStorage.setItem("bullets_option",'block');

    } else {

      bulletsContainer.style.display = 'none';
      localStorage.setItem("bullets_option",'none');

    }

handleActive(e);

  });

});
document.querySelector(".reset-options").onclick = function () {

  localStorage.removeItem("color_option");
  localStorage.removeItem("background-option");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload();

};
// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");
toggleBtn.onclick = function (e) {

  // Stop Propagation
   e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};
// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks ) {
  

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

       // Toggle Class "menu-active" On Button
     toggleBtn.classList.toggle("menu-active");

       // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

   }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}

