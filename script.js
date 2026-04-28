// script.js

// INTRO REMOVE
window.onload = function () {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.style.display = "none";
  }, 3800);
};

// HERO IMAGE SLIDER
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4500);
}

// PREMIUM HAMBURGER MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });

  // Close after clicking link
  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("open");
    });
  });

}
