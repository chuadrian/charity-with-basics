import { initNavbar } from './js/components/navbar.js';
import { initDonationCarousel } from './js/components/carousel.js';
import { initPaymentModal } from './js/components/modal.js';

// Initializing ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200
});

// Applying animations
sr.reveal('.hero h1, .hero p, .hero .cta-button', { interval: 200 });
sr.reveal('.about-card', { interval: 200 });
sr.reveal('.story', { interval: 200 });
sr.reveal('.gallery-grid img', { interval: 100 });
sr.reveal('.donation-slide', { interval: 200 });
sr.reveal('.contact-info, .contact-form', { interval: 200 });

// Initializing the created components
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initDonationCarousel();
    initPaymentModal();
});