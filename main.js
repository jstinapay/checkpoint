const sections = document.querySelectorAll('.slideInLeft, .slideInRight');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

const logo = document.getElementById('logoTrigger');
const startBtn = document.querySelector('.login-btn');


logo.addEventListener('click', () => {
    logo.classList.toggle('active');
});


let hoveringLogo = false;
let hoveringStart = false;

function updateActiveState() {
    if (hoveringLogo || hoveringStart) {
        logo.classList.add('active');
    } else {
        logo.classList.remove('active');
    }
}

if (logo) {
    logo.addEventListener('mouseenter', () => {
        hoveringLogo = true;
        updateActiveState();
    });
    logo.addEventListener('mouseleave', () => {
        hoveringLogo = false;
        updateActiveState();
    });
}

if (startBtn) {
    startBtn.addEventListener('mouseenter', () => {
        hoveringStart = true;
        updateActiveState();
    });
    startBtn.addEventListener('mouseleave', () => {
        hoveringStart = false;
        updateActiveState();
    });
}