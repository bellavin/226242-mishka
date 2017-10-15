var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navItems = document.getElementsByClassName('main-nav__item--mobile');

	navToggle.addEventListener('click', function() {
		if (navMain.classList.contains('main-nav--closed')) {
			navMain.classList.remove('main-nav--closed');
			navMain.classList.add('main-nav--opened');
			for (var i = 0; i < navItems.length; i++) {
				navItems[i].classList.remove('main-nav__item--mobile-hidden');
			}
		} else {
			navMain.classList.add('main-nav--closed');
			navMain.classList.remove('main-nav--opened');
			for (var i = 0; i < navItems.length; i++) {
				navItems[i].classList.add('main-nav__item--mobile-hidden');
			}
		}
	});
