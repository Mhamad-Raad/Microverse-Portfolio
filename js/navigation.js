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

const navItems = document.querySelectorAll('.menu-item');
window.addEventListener('scroll', () => {
  const windowScrolPosition = window.scrollY;
  const contactMePosition = document.querySelector('#contact-me').offsetTop;
  const WorksPosition = document.querySelector('.works').offsetTop;
  const aboutMyselfPosition = document.querySelector('.about-myself').offsetTop;
  const mainPosition = document.querySelector('#main').offsetTop;

  if (windowScrolPosition >= mainPosition && windowScrolPosition < (WorksPosition - 200)) {
    navItems[0].classList.add('active');
    navItems[1].classList.remove('active');
    navItems[2].classList.remove('active');
    navItems[3].classList.remove('active');
  } else if (windowScrolPosition >= (WorksPosition - 200)
  && windowScrolPosition < (aboutMyselfPosition - 300)) {
    navItems[0].classList.remove('active');
    navItems[1].classList.add('active');
    navItems[2].classList.remove('active');
    navItems[3].classList.remove('active');
  } else if (windowScrolPosition >= (aboutMyselfPosition - 300)
  && (windowScrolPosition + 750) < contactMePosition) {
    navItems[0].classList.remove('active');
    navItems[1].classList.remove('active');
    navItems[2].classList.add('active');
    navItems[3].classList.remove('active');
  } else if (windowScrolPosition >= (contactMePosition - 750)) {
    navItems[0].classList.remove('active');
    navItems[1].classList.remove('active');
    navItems[2].classList.remove('active');
    navItems[3].classList.add('active');
  } else {
    navItems[0].classList.add('active');
    navItems[1].classList.remove('active');
    navItems[2].classList.remove('active');
    navItems[3].classList.remove('active');
  }
});

navItems[0].addEventListener('click', navigateToMenu);
navItems[1].addEventListener('click', navigateToWorks);
navItems[2].addEventListener('click', navigateToAboutMyself);
navItems[3].addEventListener('click', navigateToContactMe);
