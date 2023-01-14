const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const crossIcon = document.querySelector('.cross-icon');
const menuItem = document.querySelectorAll('.menu-item');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('nav-show');
});

crossIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('nav-show');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.toggle('hide');
  });
});
