/* Roast motion kit (JS half): port of the hooks in components/ui/roast-motion.tsx. Loaded once by every roast section.
   - html.blko-rm: motion allowed (no ?static, no reduced motion, not an automated browser). The CSS only animates under it.
   - window.blkoRoast: helpers for section scripts, all no-ops (or "settled" values) without motion:
       on                    true when motion is allowed
       progress(el, cb, {start, end})   scroll progress 0..1 as el's top moves from start to end (viewport fractions);
                             calls cb(1) once without motion; returns a stop function
       inView(el, cb, margin)            cb() once el enters the viewport (at once without motion)
       countUp(to, cb, ms)               cb(value) from 0 to `to`, ease-out (cb(to) at once without motion)
       magnetic(root, max)               magnetic pull on blko-ui-buttons and [data-magnetic] inside root (fine pointers)
       ping(qty)                         tell the header cart something was added (fires "roast:cart")
   - Declarative: [data-rm-magnetic] roots get magnetic(); [data-rm-count="<to>"] elements count up when seen
     (data-rm-decimals, data-rm-suffix); .rm-cart elements wiggle on "roast:cart" and bump their .rm-count number. */
(() => {
  if (window.blkoRoast) return;
  const root = document.documentElement;
  let on = false;
  try {
    on = !new URLSearchParams(location.search).has('static') && !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) { on = false; }
  if (on) root.classList.add('blko-rm');

  const progress = (el, cb, { start = 0.9, end = 0.3 } = {}) => {
    if (!on) { cb(1); return () => {}; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const top = el.getBoundingClientRect().top / innerHeight;
      cb(Math.min(1, Math.max(0, (start - top) / (start - end))));
    };
    const req = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', req, { passive: true });
    addEventListener('resize', req);
    return () => { removeEventListener('scroll', req); removeEventListener('resize', req); cancelAnimationFrame(raf); };
  };
  const inView = (el, cb, margin = '0px 0px -15% 0px') => {
    if (!on) { cb(); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); cb(); } }, { rootMargin: margin });
    io.observe(el);
  };
  const countUp = (to, cb, ms = 1400) => {
    if (!on) { cb(to); return; }
    const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / ms); cb(to * (1 - (1 - k) ** 3)); if (k < 1) requestAnimationFrame(step); };
    cb(0); requestAnimationFrame(step);
  };
  const magnetic = (box, max = 7) => {
    if (!on || !matchMedia('(pointer: fine)').matches || box.dataset.rmMagOn) return;
    box.dataset.rmMagOn = '1';
    box.querySelectorAll('.blko-ui-button, [data-magnetic]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const b = el.getBoundingClientRect();
        const x = ((e.clientX - b.left) / b.width - 0.5) * 2, y = ((e.clientY - b.top) / b.height - 0.5) * 2;
        el.style.translate = `${(x * max).toFixed(1)}px ${(y * max * 0.6).toFixed(1)}px`;
      });
      el.addEventListener('pointerleave', () => { el.style.translate = ''; });
    });
  };
  const ping = (qty = 1) => dispatchEvent(new CustomEvent('roast:cart', { detail: { qty } }));
  window.blkoRoast = { on, progress, inView, countUp, magnetic, ping };

  const fmt = (v, d) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  const scan = (scope) => {
    scope.querySelectorAll('[data-rm-magnetic]').forEach((b) => magnetic(b));
    scope.querySelectorAll('[data-rm-count]:not([data-rm-counted])').forEach((el) => {
      el.setAttribute('data-rm-counted', '');
      const to = parseFloat(el.dataset.rmCount), d = parseInt(el.dataset.rmDecimals || '0', 10), suf = el.dataset.rmSuffix || '';
      inView(el, () => countUp(to, (v) => { el.textContent = fmt(v, d) + suf; }));
    });
  };
  addEventListener('roast:cart', (e) => {
    const qty = (e.detail && e.detail.qty) || 1;
    document.querySelectorAll('.rm-cart').forEach((c) => {
      const n = c.querySelector('.rm-count');
      if (n) { n.textContent = String((parseInt(n.textContent, 10) || 0) + qty); n.hidden = false; }
      c.classList.remove('is-pinged');
      requestAnimationFrame(() => c.classList.add('is-pinged'));
      clearTimeout(c._rmT); c._rmT = setTimeout(() => c.classList.remove('is-pinged'), 800);
    });
  });
  const start = () => scan(document);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  document.addEventListener('shopify:section:load', (e) => scan(e.target));
})();
