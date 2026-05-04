// ===============================
// CLEAN & STABLE SCRIPT (FINAL FIX)
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

  if (!menuBtn || !navMenu) return;

  // create overlay
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
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  // ===== CLOSE ON OVERLAY =====
  overlay.addEventListener("click", closeMenu);

  // ===== CLOSE ON LINK CLICK (NO FORCED NAVIGATION) =====
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
      // ⚠️ DO NOTHING ELSE → browser handles navigation
    });
  });

});
