const burgerMenu = document.querySelector('.menu-burger-icon');
const menu = document.querySelector('.mobile-menu');
function openMenu() {
  burgerMenu.style.display = 'none';
  menu.style.display = 'flex';
}
burgerMenu.addEventListener('click', openMenu);
const closeMenubtn = document.querySelector('.fa-xmark');
function closeMenu() {
  burgerMenu.style.display = 'block';
    menu.style.display = 'none';
}
closeMenubtn.addEventListener('click', closeMenu);
const mainMenu = document.querySelector('.main-menu');
const aboutMyself = document.querySelector('.about-myself-menu');
const contactMeMenu = document.querySelector('.contact-me-menu');
const worksMenu = document.querySelector('.works-menu');

mainMenu.addEventListener('click', function() {
   closeMenu();
   window.location = '#main';
});
aboutMyself.addEventListener('click', function() {
  closeMenu();
  window.location = '#about-myself';
});
worksMenu.addEventListener('click', function() {
  closeMenu();
  window.location = '#works';
});
contactMeMenu.addEventListener('click', function() {
  closeMenu();
  window.location = '#contact-me';
});
