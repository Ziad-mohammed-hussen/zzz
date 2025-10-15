// Mobile menu toggle
const navLinks = document.querySelector('header nav .nav_links');
const menuIcon = document.querySelector('.menu_icon');
const closeMenu = document.querySelector('.close_menu');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
}

if (closeMenu && navLinks) {
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    });
}

// Close menu when clicking a link (mobile)
document.querySelectorAll('header nav .nav_links a').forEach(a => {
    a.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});

// Smooth scrolling handled by CSS scroll-behavior

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Print CV
const printBtn = document.getElementById('print-cv');
if (printBtn) {
    printBtn.addEventListener('click', () => {
        window.location.hash = '#cv';
        setTimeout(() => window.print(), 200);
    });
}

// Any element with data-print-cv acts like Download -> Print PDF
document.querySelectorAll('[data-print-cv]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => window.print(), 400);
    });
});

// Hide logo and top Download CV on mobile when scrolling down
let lastScrollY = window.scrollY;
const isMobile = () => window.matchMedia('(max-width: 640px)').matches;

window.addEventListener('scroll', () => {
    if (!isMobile()) return;
    const currentY = window.scrollY;
    const scrolledDown = currentY > lastScrollY && currentY > 10;
    document.body.classList.toggle('scrolled-down', scrolledDown);
    lastScrollY = currentY;
}, { passive: true });


