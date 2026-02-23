function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}

/* FILTER WITH FADE */
function filterProjects(category){
let items=document.querySelectorAll(".portfolio-item");
let buttons=document.querySelectorAll(".filter-buttons button");

buttons.forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");

items.forEach(item=>{
item.style.opacity="0";
setTimeout(()=>{
if(category==="all"||item.classList.contains(category)){
item.style.display="block";
item.style.opacity="1";
}else{
item.style.display="none";
}
},300);
});
}

/* POPUP */
function openPopup(element){
let img=element.querySelector("img").src;
document.getElementById("popup-img").src=img;
document.getElementById("popup").style.display="flex";
}
function closePopup(){
document.getElementById("popup").style.display="none";
}
