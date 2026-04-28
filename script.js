// script.js

// INTRO REMOVE
window.onload = function () {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.style.display = "none";
  }, 3200);
};

// HERO SLIDER
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4500);
}

// MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// create overlay automatically
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

function closeMenu(){
  navMenu.classList.remove("active");
  menuBtn.classList.remove("open");
  overlay.classList.remove("show");
}

if(menuBtn && navMenu){

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll("#navMenu a").forEach(link=>{
    link.addEventListener("click", closeMenu);
  });

}
