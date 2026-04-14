window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.9)";
    }
});