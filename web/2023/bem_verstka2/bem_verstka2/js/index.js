const headerNavigation = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
	headerNavigation.classList.toggle('header__nav-active')
} );

