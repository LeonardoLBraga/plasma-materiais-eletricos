const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.querySelector(".hamburger");

mobileMenu.style.maxHeight = "0px";
mobileMenu.style.paddingTop = "0px";
mobileMenu.style.paddingBottom = "0px";

menuBtn.addEventListener("click", () => {
    const isOpen = hamburger.classList.contains("open");

    hamburger.classList.toggle("open");

    if (!isOpen) {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 24 + "px";
    mobileMenu.style.paddingTop = "0.75rem";
    mobileMenu.style.paddingBottom = "0.75rem";
    } else {
    mobileMenu.style.maxHeight = "0px";
    mobileMenu.style.paddingTop = "0px";
    mobileMenu.style.paddingBottom = "0px";
    }

    const expanded = hamburger.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
});

mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.style.maxHeight = "0px";
    mobileMenu.style.paddingTop = "0px";
    mobileMenu.style.paddingBottom = "0px";
    menuBtn.setAttribute("aria-expanded", "false");
    });
});