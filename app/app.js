// app.js

function loadParticles(id, color) {
    particlesJS(id, {
        "particles": {
            "number": { 
                "value": 150,
                "density": { "enable": true, "value_area": 800 } 
            },
            "color": { "value": color },
            "shape": { "type": "circle" },
            "opacity": { 
                "value": 0.8, 
                "random": true,
                "anim": { "enable": true, "speed": 1, "opacity_min": 0.3, "sync": false }
            },
            "size": { 
                "value": 4, 
                "random": true 
            },
            "line_linked": { 
                "enable": true, 
                "distance": 120, 
                "color": color, 
                "opacity": 0.4, 
                "width": 1.5 
            },
            "move": { 
                "enable": true, 
                "speed": 2, 
                "direction": "none", 
                "random": true, 
                "straight": false, 
                "out_mode": "out" 
            }
        },
        "interactivity": {
            "events": { 
                "onhover": { "enable": true, "mode": "grab" }, 
                "onclick": { "enable": true, "mode": "push" } 
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadParticles('particles-js', '#8e2de2');       // Home
    loadParticles('particles-experience', '#ff0080'); // Experience
    loadParticles('particles-skills', '#00d2ff');     // Skills
    loadParticles('particles-certs', '#ffeb14');      // Certificates 
    loadParticles('particles-projects', '#39ff14');   // Projects
});



window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
};