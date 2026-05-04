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
 document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    const toggle = document.getElementById('menuToggle');
    if(toggle) toggle.checked = false;
  });
});

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

const filterButtons = document.querySelectorAll(".gallery-filter button");
const items = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // active button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    items.forEach(item => {
      const category = item.getAttribute("data-category");

      if(filter === "all" || filter === category){
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });

  });
});
