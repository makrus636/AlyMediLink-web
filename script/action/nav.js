const host = document.querySelector('app-bar');

const shadow = host.shadowRoot;

const menuIcon = shadow.getElementById('menu-icon');

const navLinks = shadow.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('resize', () => {
    
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});