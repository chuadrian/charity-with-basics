export function initNavbar() {
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
            menuButton.classList.remove('active');
        }
    });
}