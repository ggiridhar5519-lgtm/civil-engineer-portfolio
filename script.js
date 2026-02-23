/* MOBILE MENU */
function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}

/* FILTER */
function filterProjects(category){
let items=document.querySelectorAll(".portfolio-item");
let buttons=document.querySelectorAll(".filter-buttons button");

buttons.forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");

items.forEach(item=>{
if(category==="all"||item.classList.contains(category)){
item.style.display="block";
}else{
item.style.display="none";
}
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
