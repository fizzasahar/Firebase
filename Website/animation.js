// script.js
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById('navbar');
    var menuToggle = document.getElementById('menu-toggle');
    var navLinks = document.querySelector('.navbar ul');
    var scrollProgress = document.getElementById('scroll-progress');
    var sections = document.querySelectorAll('section');
    var navItems = document.querySelectorAll('.navbar ul li');

    // Add scrolled class on scroll
    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update scroll progress bar
        var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (scrollPos / scrollHeight) * 100;
        scrollProgress.style.width = scrolled + "%";

        // Update active link based on section in view
        sections.forEach((section, index) => {
            if (window.pageYOffset >= section.offsetTop - navbar.offsetHeight) {
                navItems.forEach(item => item.classList.remove('active'));
                navItems[index].classList.add('active');
            }
        });
    };

    // Toggle menu for mobile view
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});

//contact and send image Animation

var links = document.querySelectorAll(".animateLink");
links.forEach(link => {
    link.addEventListener("click", function (event) {


        const targetId = this.getAttribute("data-target");
        const targetImage = document.getElementById(targetId);

        targetImage.classList.remove("animate__animated", "animate__zoomIn");

        setTimeout(() => {
            targetImage.classList.add("animate__animated", "animate__zoomIn");
        }, 10);
    });
});

// All span Animation
var links = document.querySelectorAll(".animateLink");
links.forEach(link => {
    link.addEventListener("click", function (event) {
        var targetImgId = this.getAttribute("data-target");
        var targetDivId = this.getAttribute("data-target-span");

        var targetImage = document.getElementById(targetImgId);
        var targetDiv = document.getElementById(targetDivId);


        targetImage.classList.remove("animate__animated", "animate__zoomIn");
        targetDiv.classList.remove("animate__animated", "animate__slideInLeft");

        setTimeout(() => {
            targetImage.classList.add("animate__animated", "animate__zoomIn");
            targetDiv.classList.add("animate__animated", "animate__slideInLeft");
        }, 10);
    });
});







