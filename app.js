const navSide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-link');
	const navLinks = document.querySelectorAll('.nav-link li')

	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');
		//Animation Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			}else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +  0.5}s`;
			}
		});
		//burger Animatoin
		burger.classList.toggle('toggle');
	});
}
navSide();