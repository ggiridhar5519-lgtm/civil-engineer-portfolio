// ===============================
// FIXED & SAFE SCRIPT (FINAL)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===== INTRO =====
  const intro = document.getElementById("intro");
  if (intro) {
    setTimeout(() => {
      intro.style.display = "none";
    }, 3200);
  }

  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 7000);
  }

  // ===== MENU =====
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (!menuBtn || !navMenu) {
    console.log("Menu elements missing");
    return;
  }

  // create overlay if not exists
  let overlay = document.querySelector(".menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);
  }

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

  // ===== TOGGLE MENU =====
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (navMenu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // ===== CLICK OUTSIDE =====
  overlay.addEventListener("click", closeMenu);

  // ===== CLICK LINKS (FINAL FIX) =====
  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", (e) => {

      const href = link.getAttribute("href");

      // close menu first
      closeMenu();

      // force navigation (fix for mobile)
      if (href && href !== "#") {
        setTimeout(() => {
          window.location.href = href;
        }, 50);
      }

    });
  });

});
