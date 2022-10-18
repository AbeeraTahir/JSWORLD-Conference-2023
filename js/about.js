const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const crossIcon = document.querySelector('.cross-icon');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('hide');
});

crossIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('hide');
});