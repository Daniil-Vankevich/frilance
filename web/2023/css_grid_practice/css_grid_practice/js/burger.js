const headerNav = document.querySelector('.header__menu');
const burgerMenu = document.querySelector('.header__burger');

burgerMenu.addEventListener("click", () => {
	headerNav.classList.toggle('.header__menu-active');
});

