export function initDonationCarousel() {
    const carousel = document.querySelector('.donation-carousel');
    const slidesContainer = carousel.querySelector('.donation-slides');
    const slides = carousel.querySelectorAll('.donation-slide');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        const offset = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;

        // Update button states
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarousel();
        }
    }

    // Button controls
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialize
    updateCarousel();
}