let slides=document.querySelectorAll(".slide");
let current=0;

let titles=[
"S HARINATH GUPTHA",
"S HARINATH GUPTHA",
"S HARINATH GUPTHA",
"S HARINATH GUPTHA"
];

let subtitles=[
"Professional Civil Engineer",
"Structural Design Specialist",
"Modern Construction Consultant",
"Trusted Site Supervisor"
];

let tags=[
"Strong Foundations • Smart Structures • Trusted Execution",
"Precision Planning • Durable Structures • Excellence",
"Engineering Quality • Cost Efficient • Reliable",
"Safe Designs • Accurate Estimation • Professional Execution"
];

let title=document.getElementById("hero-title");
let sub=document.getElementById("hero-sub");
let tag=document.getElementById("hero-tag");

function changeText(index){
title.classList.remove("fade-up");
sub.classList.remove("fade-up");
tag.classList.remove("fade-up");

setTimeout(()=>{
title.innerText=titles[index];
sub.innerText=subtitles[index];
tag.innerText=tags[index];

title.classList.add("fade-up","show");
sub.classList.add("fade-up","show");
tag.classList.add("fade-up","show");
},300);
}

function nextSlide(){
slides[current].classList.remove("active");
current=(current+1)%slides.length;
slides[current].classList.add("active");
changeText(current);
}

setInterval(nextSlide,4500);

/* MOBILE MENU */
function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}
