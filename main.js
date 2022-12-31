const popOut = document.querySelector(".pop_out");
const featureMenu = document.querySelector(".feature");
const featureArrow = document.querySelector(".feature > img");

//Execution Phase for feature menu
featureMenu.addEventListener("mouseenter", () => {
  featureArrow.classList.add("rotated");
  popOut.style.opacity = "1";
  featureMenu.style.color = "#151515";
  // featureArrow.style.stroke = "#151515"; //Ensure to fix the svg colour later
});

featureMenu.addEventListener("mouseleave", () => {
  featureArrow.classList.remove("rotated");
  popOut.style.opacity = "0";
  featureMenu.style.color = "#686868";
});

//For Company Menu
const compPopOut = document.querySelector(".pop_out2");
const companyMenu = document.querySelector(".company");
const companyArrow = document.querySelector(".company > img");

//Execution Phase for Company Menu
companyMenu.addEventListener("mouseenter", () => {
  companyArrow.classList.add("rotated");
  compPopOut.style.opacity = "1";
  companyMenu.style.color = "#151515";
  // companyArrow.style.stroke = "#151515"; //Ensure to fix the svg colour later
});

companyMenu.addEventListener("mouseleave", () => {
  companyArrow.classList.remove("rotated");
  compPopOut.style.opacity = "0";
  companyMenu.style.color = "#686868";
});




//For mobile
const heroImg = document.querySelector(".hero-img");
const header = document.getElementsByTagName("header");

const w = window.innerWidth;
if (w < 900) {
// Probably mobile
heroImg.src = "images/image-hero-mobile.png"
} else {
// Probably desktop
heroImg.src = "images/image-hero-desktop.png"
}

//For mobile menu section
const menuBtn = document.querySelector(".menu");
const body = document.body;
const layer = document.querySelector(".layer");
const menuDrawer = document.querySelector("#menu_options");

function antiExpectedOutcome(){
  layer.classList.remove("darken");
  // body.style.height = "100vh";
  document.querySelector(".client-images").style.paddingBottom = "0px";
  menuDrawer.style.display = "none";
}

function expectedOutcome(){
  layer.classList.add("darken");
  document.querySelector(".client-images").style.paddingBottom = "70px";
  menuDrawer.style.display = "flex";
}

menuBtn.addEventListener("click", expectedOutcome);

//The dropdowns
const featureLink = document.querySelector('.feature-mobile');
const featureLinkArrow = document.querySelector('.feature-mobile > img');
const companyLink = document.querySelector('.company-mobile');
const companyLinkArrow = document.querySelector('.company-mobile > img');
const popOutMobile = document.querySelector('.pop_out-m');
const popOutMobileTwo = document.querySelector('.pop_out2-m');

function featureLinkFxn(){
  featureLinkArrow.classList.add("rotated");
  popOutMobile.style.display = "flex";
}

featureLink.addEventListener("click", ()=>{
  popOutMobile.classList.toggle("open");
  featureLink.classList.toggle("open");
  featureLink.style.transition = "0.2 all ease-in-out";
});
companyLink.addEventListener("click", ()=>{
  popOutMobileTwo.classList.toggle("yo");
  companyLink.classList.toggle("yo");
});
// featureLink.removeEventListener("click", featureLinkFxn);

