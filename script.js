let slides=document.querySelectorAll(".slide");
let current=0;

function showSlide(i){
slides.forEach(s=>s.classList.remove("active"));
slides[i].classList.add("active");
}

function nextSlide(){
current=(current+1)%slides.length;
showSlide(current);
}

setInterval(nextSlide,3500);

function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}

window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});

document.querySelectorAll(".counter").forEach(counter=>{
function update(){
let target=+counter.getAttribute("data-target");
let count=+counter.innerText;
let inc=target/200;
if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,10);
}else{
counter.innerText=target;
}
}
update();
});
