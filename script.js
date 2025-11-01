const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Scroll reveal animation
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (const element of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
}

// ===== TYPEWRITER WITH STATIC "We" =====
document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "build brands that grow.",
    "design websites that convert.",
    "bring ideas to life."
  ];

  const el = document.getElementById("typewriter");
  if (!el) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[wordIndex];

    // Typing or deleting
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    // Update visible text (with "We " prefix)
    el.textContent = "We " + current.substring(0, charIndex);

    // Typing speeds
    let delay = isDeleting ? 35 : 60;

    // Pause when full word typed
    if (!isDeleting && charIndex === current.length) {
      delay = 700;
      isDeleting = true;
    }
    // When deleted, move to next word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % phrases.length;
      delay = 250;
    }

    setTimeout(type, delay);
  }

  type();
});


