
let burgerMenu = document.querySelector('.menu-burger-icon');
let menu = document.querySelector('.mobile-menu');


burgerMenu.addEventListener('click', function() {
    burgerMenu.style.display = 'none';
    menu.style.display = 'flex';
    console.log('clicked');
});