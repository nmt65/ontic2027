// Hand-made motion: each moment runs once per page load. All visuals live in motion.css.
const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel);

// Day markers are sewn one after another with uneven start offsets (ms), like a hand moving along a row.
const DAY_OFFSETS = [0, 140, 310, 420, 600];

// Fires fn once when the element is first in view, then stops observing.
function once(el: Element | null, threshold: number, fn: () => void) {
  if (!el) return;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { io.disconnect(); fn(); }
  }, { threshold });
  io.observe(el);
}

function start() {
  root.dataset.motion = 'on';
  root.classList.add('motion-ready');

  // 1. Hero photo drift runs only while the hero is on screen.
  const photo = $<HTMLElement>('[data-hero-photo]');
  if (photo) new IntersectionObserver(([e]) => { photo.style.animationPlayState = e.isIntersecting ? 'running' : 'paused'; }).observe(photo);

  // 2. Date marker: stitches itself once on load (CSS adds the ~350ms delay).
  $('[data-stitch-mark]')?.classList.add('is-stitched');

  // 3. Scroll cue stops for good after the first real scroll.
  const cue = $('[data-scroll-cue]');
  const onScroll = () => { if (scrollY > 80) { cue?.classList.add('is-done'); removeEventListener('scroll', onScroll); } };
  if (cue) { addEventListener('scroll', onScroll, { passive: true }); onScroll(); }

  // 4. Programme days, sewn in when the list is mostly visible.
  const days = $<HTMLElement>('[data-days]');
  if (days) {
    const threshold = Math.min(0.4, (innerHeight * 0.9) / Math.max(days.offsetHeight, 1));
    once(days, threshold, () => days.querySelectorAll<SVGElement>('[data-day-mark]').forEach((mark, i) => {
      mark.style.setProperty('--t0', `${DAY_OFFSETS[i] ?? DAY_OFFSETS.at(-1)}ms`);
      mark.classList.add('is-stitched');
    }));
  }

  // 5. Footer embroidery: one clip step per 84px (desktop) or 42px (phone) motif repeat.
  const cloth = $<HTMLElement>('[data-embroidery]');
  if (cloth) {
    const width = root.clientWidth;
    cloth.querySelectorAll<SVGElement>('svg').forEach((svg) => {
      const step = svg.dataset.embroideryBand === 'large' ? 84 : 42;
      const n = Math.ceil(width / step);
      const k1 = Math.max(1, Math.round(n * 0.4)), k2 = Math.min(n - 1, Math.round(n * 0.75));
      const vars: Record<string, number | string> = { step: `${step}px`, k1, k2, kn: n, s1: k1, s2: Math.max(1, k2 - k1), s3: Math.max(1, n - k2) };
      Object.entries(vars).forEach(([k, v]) => svg.style.setProperty(`--${k}`, String(v)));
    });
    cloth.addEventListener('animationend', (e) => { if ((e as AnimationEvent).animationName === 'ie-sew') cloth.classList.add('is-sewn'); });
    once(cloth, 0.3, () => cloth.classList.add('is-stitched'));
  }
}

// Reduced motion is respected live: dropping .motion-ready shows every final state at once.
reduce.addEventListener('change', () => { if (reduce.matches) root.classList.remove('motion-ready'); });
if (!reduce.matches && 'IntersectionObserver' in window) start();
