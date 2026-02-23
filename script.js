// HERO SLIDE WITH DIRECTION
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

setInterval(nextSlide, 6000);


// MOBILE MENU
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}


// SCROLL REVEAL
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});


// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
