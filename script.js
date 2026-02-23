/* IMAGE SLIDER */
let slides=document.querySelectorAll(".slide");
let current=0;

setInterval(()=>{
slides[current].classList.remove("active");
current=(current+1)%slides.length;
slides[current].classList.add("active");
},3000);

/* MOBILE MENU */
function toggleMenu(){
let nav=document.getElementById("nav");
let toggle=document.querySelector(".menu-toggle");

nav.classList.toggle("active");
toggle.classList.toggle("active");
}

/* HEADER SHRINK */
window.addEventListener("scroll",()=>{
let header=document.getElementById("header");

if(window.scrollY>60){
header.classList.add("shrink");
}else{
header.classList.remove("shrink");
}
});
