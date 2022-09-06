
let burgerMenu = document.querySelector('.menu-burger-icon');
let menu = document.querySelector('.mobile-menu');

function openMenu() {
  burgerMenu.style.display = 'none';
  menu.style.display = 'flex';
}

burgerMenu.addEventListener('click', openMenu);


let closeMenubtn = document.querySelector('.fa-xmark');

function closeMenu() {
  burgerMenu.style.display = 'block';
    menu.style.display = 'none';
}

closeMenubtn.addEventListener('click', closeMenu);

let mainMenu = document.querySelector('.main-menu');
let aboutMyself = document.querySelector('.about-myself-menu');
let contactMeMenu = document.querySelector('.contact-me-menu');
let worksMenu = document.querySelector('.works-menu');

mainMenu.addEventListener('click', function() {
   closeMenu();
   window.location = "#main";
});

aboutMyself.addEventListener('click', function() {
  closeMenu();
  window.location = "#about-myself";
});

worksMenu.addEventListener('click', function() {
  closeMenu();
  window.location = "#works";
});

contactMeMenu.addEventListener('click', function() {
  closeMenu();
  window.location = "#contact-me";
});
