const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const progress = document.querySelector<HTMLElement>('.scroll-progress');
const topButton = document.querySelector<HTMLButtonElement>('.back-top');
const header = document.querySelector<HTMLElement>('.site-header');
let scheduled = false;
function updateScroll() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, window.scrollY / distance) : 0})`;
  if (topButton) topButton.hidden = window.scrollY < 650;
  header?.classList.toggle('is-scrolled', window.scrollY > 18);
  scheduled = false;
}
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); } }, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();
topButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduced.matches ? 'instant' : 'smooth' });
  document.querySelector<HTMLAnchorElement>('.site-header .brand')?.focus({ preventScroll: true });
});
if (!reduced.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('reveal-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add('reveal-ready', 'reveal-pending'); observer.observe(el);
    }
  });
}
document.querySelectorAll<HTMLDetailsElement>('.more-nav').forEach(details => {
  document.addEventListener('click', event => { if (!details.contains(event.target as Node)) details.open = false; });
  details.addEventListener('keydown', event => { if (event.key === 'Escape') { details.open = false; details.querySelector('summary')?.focus(); } });
});

