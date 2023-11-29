let $nav = document.getElementById('site_nav');

const hashURL = window.location.hash.substring(1);
window.location.hash = '';

if (hashURL) {
	window.scrollTo(0, 0);
	setTimeout(() => {
		window.scrollTo(0, 0);
	}, 1);
	setTimeout(() => {
		scroll(hashURL);
	}, 300);
	window.location.hash = hashURL;
}

document.querySelectorAll('a[href^="#"]:not(.popup-link)').forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		let hash = this.getAttribute('href').substring(1);
		scroll(hash);
	});
});

function scroll(hash) {
	const scrollTarget = document.getElementById(hash);
	if (scrollTarget) {
		const topOffset = $nav ? $nav.offsetHeight : 0;
		// const topOffset = 0; // если не нужен отступ сверху
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}
}

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	document.querySelectorAll('.section').forEach((el, i) => {
		if (el.offsetTop - $nav.offsetHeight * 2.5 <= scrollDistance) {
			document.querySelectorAll('.scroll-link').forEach((elem) => {
				if (elem.classList.contains('bg-accent-500/50')) {
					elem.classList.remove('bg-accent-500/50');
				}
			});

			document.querySelectorAll('.scroll-link')[i].classList.add('bg-accent-500/50');
		}
		if (scrollDistance < 700) {
			document.querySelectorAll('.scroll-link').forEach((elem) => {
				elem.classList.remove('bg-accent-500/50');
			});
		}
	});
});