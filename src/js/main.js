document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 50; // px scrolled before navbar becomes compact

  function updateNavbarState() {
    const isCompact = window.scrollY > SCROLL_THRESHOLD;
    navbar.classList.toggle('nav--compact', isCompact);
    navbar.classList.toggle('nav--expanded', !isCompact);

    // measure actual navbar height and publish it to CSS variable
    const height = Math.ceil(navbar.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--navbar-height', `${height}px`);
  }

  // initial
  updateNavbarState();

  window.addEventListener('scroll', updateNavbarState, { passive: true });
  window.addEventListener('resize', () => requestAnimationFrame(updateNavbarState));
});
window.i = 0;
function left() {
  const track = document.querySelector('#Carousel .track');
  if (!track) return;
  slides = track.children.length;
  window.i = (window.i - 1) % slides; 
  if(window.i < 0) window.i = slides + window.i;
  track.style.transform = `translateX(-${window.i * 100}%)`; 
};
function right() {
  const track = document.querySelector('#Carousel .track');
  if (!track) return;
  slides = track.children.length;
  if(window.i < 0) window.i = slides + window.i;
  window.i = (window.i + 1) % slides; track.style.transform = `translateX(-${window.i * 100}%)`;
};
window.left = left;
window.right = right;
