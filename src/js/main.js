/* Your JS here. */
console.log('Hello World!')

// Navbar resize on scroll: toggles a compact class and updates CSS variable for height
(function () {
	const navbar = document.getElementById('navbar');
	if (!navbar) return;

	const setNavbarHeightVar = () => {
		const height = navbar.getBoundingClientRect().height;
		document.documentElement.style.setProperty('--navbar-height', Math.ceil(height) + 'px');
	};

	// Initial set (in case CSS default is different)
	window.addEventListener('load', setNavbarHeightVar);
	window.addEventListener('resize', setNavbarHeightVar);

	let lastKnownScrollY = window.scrollY;
	const scrollThreshold = 50; // px scrolled before compacting

	const onScroll = () => {
		lastKnownScrollY = window.scrollY;
		if (lastKnownScrollY > scrollThreshold) {
			navbar.classList.add('nav--compact');
		} else {
			navbar.classList.remove('nav--compact');
		}
		// update height var because padding changed when class toggles
		// use requestAnimationFrame to avoid layout thrashing
		window.requestAnimationFrame(setNavbarHeightVar);
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	// run once to set correct state on load
	onScroll();
})();
