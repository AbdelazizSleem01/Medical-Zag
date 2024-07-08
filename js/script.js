document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navItems = document.querySelector('.nav-items');
    const btn = document.querySelector('.btn');

    navToggle.addEventListener('click', () => {
        navItems.classList.toggle('active');
        btn.classList.toggle('active');
    });
});