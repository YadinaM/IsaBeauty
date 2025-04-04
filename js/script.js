document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".klik");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("open");
        hamburger.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("open"); // Verberg het menu
            hamburger.classList.remove("open"); // Verberg de hamburger
        });
    });
});