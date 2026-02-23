/* =========================
   IMAGE SLIDER (3s)
========================= */
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 3000);


/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
    let nav = document.getElementById("nav");
    let toggle = document.querySelector(".menu-toggle");

    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}


/* =========================
   HEADER SHRINK ON SCROLL
========================= */
window.addEventListener("scroll", () => {
    let header = document.getElementById("header");

    if (window.scrollY > 60) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


/* =========================
   ONLINE / OFFLINE STATUS
   Working Hours:
   8:30 AM to 5:30 PM
========================= */

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let statusText = document.getElementById("status-text");
let statusDot = document.getElementById("status-dot");

/* Convert current time to minutes */
let currentTime = hours * 60 + minutes;

/* Working time range in minutes */
let startTime = 8 * 60 + 30;   // 8:30 AM
let endTime   = 17 * 60 + 30;  // 6:30 PM

if (currentTime >= startTime && currentTime <= endTime) {

    statusText.innerText = "Online";
    statusText.style.color = "limegreen";

    statusDot.classList.remove("offline");
    statusDot.classList.add("online");

} else {

    statusText.innerText = "Offline";
    statusText.style.color = "red";

    statusDot.classList.remove("online");
    statusDot.classList.add("offline");

}
