// script.js

window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.style.display = "none";
  }, 3200);
});

/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length) {
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 7000);
}

/* MENU */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const overlay = document.createElement("div");
overlay.className = "menu-overlay";
document.body.appendChild(overlay);

function openMenu(){
  navMenu.classList.add("active");
  menuBtn.classList.add("open");
  overlay.classList.add("show");
}

function closeMenu(){
  navMenu.classList.remove("active");
  menuBtn.classList.remove("open");
  overlay.classList.remove("show");
}

if(menuBtn && navMenu){

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if(navMenu.classList.contains("active")){
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll("#navMenu a").forEach(link=>{
    link.addEventListener("click", closeMenu);
  });

}
