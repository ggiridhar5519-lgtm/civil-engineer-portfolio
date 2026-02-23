// IMAGE SLIDER
let slides=document.querySelectorAll(".slide");
let current=0;

let subtitles=[
"Premium Residential Consultant",
"Luxury Elevation Designer",
"Structural Planning Specialist",
"Modern Construction Supervisor"
];

let sub=document.getElementById("hero-sub");

function nextSlide(){
slides[current].classList.remove("active");
current=(current+1)%slides.length;
slides[current].classList.add("active");

sub.style.opacity=0;
setTimeout(()=>{
sub.innerText=subtitles[current];
sub.style.opacity=1;
},400);
}
setInterval(nextSlide,3000);

// SCROLL BLUR HEADER
window.addEventListener("scroll",()=>{
let header=document.getElementById("header");
if(window.scrollY>50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});

// TESTIMONIAL SLIDER
let testimonials=document.querySelectorAll(".testimonial");
let t=0;
setInterval(()=>{
testimonials[t].classList.remove("active");
t=(t+1)%testimonials.length;
testimonials[t].classList.add("active");
},4000);

// ONLINE STATUS
let now=new Date();
let hour=now.getHours();
let status=document.getElementById("status");

if(hour>=8 && hour<18){
status.style.color="limegreen";
status.innerText="Online";
}else{
status.style.color="red";
status.innerText="Offline";
}

// MOBILE MENU
function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}
