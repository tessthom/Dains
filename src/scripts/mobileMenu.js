// const mobileMenuBtn = document.querySelector('.btn__mobile-menu');
const navContainer = document.querySelector('.nav');
const hamburgerBtn = document.querySelector('.btn__hamburger');
const closeBtn = document.querySelector('.icon__close');

const toggleMenu = () => {
  navContainer.classList.toggle('js-expanded');
};

hamburgerBtn?.addEventListener('click', toggleMenu);
closeBtn?.addEventListener('click', toggleMenu);