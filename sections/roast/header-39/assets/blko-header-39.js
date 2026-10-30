// header-39: sticks through its Shopify section wrapper; with motion, shrinks past 24px of scroll and hides while
// scrolling down past 320px (back on the way up). The burger opens the phone sheet; Escape closes it.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const h = root.querySelector('[data-h]'), btn = root.querySelector('[data-burger]'), sheet = root.querySelector('[data-sheet]');
    const wrap = root.parentElement;
    if (wrap && wrap.classList.contains('shopify-section')) Object.assign(wrap.style, { position: 'sticky', top: '0', zIndex: '40' });
    let open = false, hidden = false;
    const applyHide = () => {
      const on = hidden && !open;
      h.toggleAttribute('data-hide', on);
    };
    const set = (o) => {
      open = o; sheet.toggleAttribute('data-open', o);
      btn.setAttribute('aria-expanded', String(o));
      btn.setAttribute('aria-label', o ? btn.dataset.closeLabel : btn.dataset.openLabel);
      applyHide();
    };
    btn.addEventListener('click', () => set(!open));
    sheet.querySelectorAll('[data-close]').forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) { set(false); btn.focus(); } });
    if (!(window.blkoRoast && window.blkoRoast.on)) return;
    let last = scrollY, raf = 0;
    const update = () => {
      raf = 0;
      const y = scrollY;
      h.toggleAttribute('data-small', y > 24);
      if (Math.abs(y - last) > 6) { hidden = y > last && y > 320; last = y; applyHide(); }
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  }
  const all = () => document.querySelectorAll('.bheader39').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
