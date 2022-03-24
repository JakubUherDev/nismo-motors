const mobileMenuButton = document.querySelector('.mobile-menu-button');
const sidebar = document.querySelector('.sidebar');

mobileMenuButton.addEventListener('click', () => {
    sidebar.classList.toggle("-translate-x-full");

})