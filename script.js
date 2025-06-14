// Mobile Navigation Menu Toggle - Simple Version
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

// Toggle mobile menu when hamburger is clicked
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
})