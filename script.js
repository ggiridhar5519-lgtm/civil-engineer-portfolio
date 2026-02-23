let slides=document.querySelectorAll(".slide");
let current=0;

function showSlide(index){
slides.forEach(s=>s.classList.remove("active","prev"));
slides[current].classList.add("prev");
slides[index].classList.add("active");
current=index;
}

function nextSlide(){
let next=(current+1)%slides.length;
showSlide(next);
}

setInterval(nextSlide,4000);

function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}

/* SCROLL REVEAL */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});

/* COUNTERS */
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

/* PARALLAX */
window.addEventListener("mousemove",(e)=>{
let x=(window.innerWidth/2-e.pageX)/50;
let y=(window.innerHeight/2-e.pageY)/50;
slides[current].style.transform=`translate(${x}px,${y}px) scale(1.05)`;
});
