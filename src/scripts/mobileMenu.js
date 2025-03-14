const navContainer = document.querySelector('.nav');
const hamburgerBtn = document.querySelector('.btn__hamburger');
const closeBtn = document.querySelector('.icon__close');

const toggleMenu = () => {
  navContainer.classList.toggle('js-expanded');
};

const openMenu = () => {
  navContainer.classList.remove('js-closed');
  navContainer.classList.add('js-expanded');

}

const closeMenu = () => {
  navContainer.classList.remove('js-expanded');
  navContainer.classList.add('js-closed');
}

hamburgerBtn?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);

