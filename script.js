/* =========================
   CUSTOM SPIDER CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

    setTimeout(() => {
        follower.style.left = mouseX + "px";
        follower.style.top = mouseY + "px";
    }, 80);

});


/* =========================
   CURSOR HOVER EFFECT
========================= */

const clickableElements = document.querySelectorAll(
    "a, button, input, textarea, select"
);

clickableElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(1.8)";

        follower.style.transform =
            "translate(-50%, -50%) scale(1.3)";

    });


    element.addEventListener("mouseleave", () => {

        cursor.style.transform =
            "translate(-50%, -50%) scale(1)";

        follower.style.transform =
            "translate(-50%, -50%) scale(1)";

    });

});


/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   SCROLL ANIMATION
========================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "1s ease";

    observer.observe(section);

});


/* =========================
   FORM LOADING EFFECT
========================= */

const form = document.querySelector(".wish-form");
const submitBtn = document.querySelector(".submit-btn");

form.addEventListener("submit", () => {

    submitBtn.innerHTML = "SENDING... 🕸️";
    submitBtn.style.pointerEvents = "none";

});