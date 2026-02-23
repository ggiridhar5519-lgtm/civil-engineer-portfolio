// IMAGE SHUFFLE EVERY 3 SECONDS (PREMIUM FADE)
let slides=document.querySelectorAll(".slide");
let current=0;

function nextSlide(){
slides[current].classList.remove("active");
current=(current+1)%slides.length;
slides[current].classList.add("active");
}

setInterval(nextSlide,3000);

// MOBILE MENU
function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}

// WORKING HOURS AUTO COLOR
let hoursElement=document.getElementById("working-hours");
let now=new Date();
let hour=now.getHours();

if(hour>=8 && hour<18){
hoursElement.style.color="limegreen";
}else{
hoursElement.style.color="red";
}
