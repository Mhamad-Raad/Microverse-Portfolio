const burgerMenu = document.querySelector('.menu-burger-icon');
const menu = document.querySelector('.mobile-menu');

function openMenu() {
  burgerMenu.style.display = 'none';
  menu.style.display = 'flex';
}

burgerMenu.addEventListener('click', openMenu);

const closeMenubtn = document.querySelector('.menu-close');

function closeMenu() {
  burgerMenu.style.display = 'block';
  menu.style.display = 'none';
}

closeMenubtn.addEventListener('click', closeMenu);
const mainMenu = document.querySelector('.main-menu');
const aboutMyself = document.querySelector('.about-myself-menu');
const contactMeMenu = document.querySelector('.contact-me-menu');
const worksMenu = document.querySelector('.works-menu');

function navigateToMenu() {
  closeMenu();
  window.location = '#main';
}
mainMenu.addEventListener('click', navigateToMenu);

function navigateToAboutMyself() {
  closeMenu();
  window.location = '#about-myself';
}
aboutMyself.addEventListener('click', navigateToAboutMyself);

function navigateToWorks() {
  closeMenu();
  window.location = '#works';
}
worksMenu.addEventListener('click', navigateToWorks);

function navigateToContactMe() {
  closeMenu();
  window.location = '#contact-me';
}
contactMeMenu.addEventListener('click', navigateToContactMe);
