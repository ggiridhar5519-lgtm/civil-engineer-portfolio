let slides=document.querySelectorAll(".slide");
let current=0;

let subtitles=[
"Premium Residential & Structural Consultant",
"Luxury Home Specialist",
"Modern Elevation Expert",
"Trusted Construction Supervisor",
"Precision Engineering Services",
"High-End Residential Planning",
"Architectural Structural Design",
"Contemporary Elevation Designer",
"Urban Luxury Housing Specialist",
"Quality & Durability Focused",
"Modern Structural Consultant",
"Elegant Building Design Expert"
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
},500);
}

setInterval(nextSlide,3500);

/* MOBILE MENU */
function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}
