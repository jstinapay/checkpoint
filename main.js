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


const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const logo = document.getElementById('logoTrigger');
logo.addEventListener('click', () => {
    logo.classList.toggle('active');

        });