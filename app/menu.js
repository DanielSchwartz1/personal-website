// menu.js
const menuBtn = document.getElementById('mobile-menu');
const navContent = document.getElementById('nav-content');
const navLinks = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
    navContent.classList.toggle('active');
    menuBtn.classList.toggle('is-active'); 
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navContent.classList.remove('active');
        menuBtn.classList.remove('is-active'); 
    });
});