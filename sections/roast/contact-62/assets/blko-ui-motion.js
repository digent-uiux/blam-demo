/* Port of components/ui/motion.tsx: scroll reveal for [data-reveal] / [data-reveal-group]. Off for ?static, reduced
   motion and automated browsers, so captures are never blank. Only what starts below the first screen is held back. */
(() => {
  const root = document.documentElement;
  if (window.blkoUiMotion) return;
  window.blkoUiMotion = true;
  try {
    if (new URLSearchParams(location.search).has('static') || navigator.webdriver || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  } catch (e) { return; }
  root.classList.add('blko-ui-motion');
  const SEL = '[data-reveal]:not([data-shown]), [data-reveal-group]:not([data-shown])';
  const show = (el) => { el.removeAttribute('data-pending'); el.setAttribute('data-shown', ''); };
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  const scan = () => {
    document.querySelectorAll(SEL).forEach((el) => {
      if (el.hasAttribute('data-pending')) return;
      if (el.getBoundingClientRect().top <= innerHeight) return;
      el.setAttribute('data-pending', '');
      io.observe(el);
    });
  };
  const start = () => {
    scan();
    let raf = 0;
    new MutationObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(scan); }).observe(document.body, { childList: true, subtree: true });
    // Theme Editor: sections re-rendered in place join in through the observer above.
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
