// blog-95: prev / next scroll the rail one card, dim at the ends; the progress line follows the scroll.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const rail = root.querySelector('[data-rail]'), bar = root.querySelector('[data-bar]');
    if (!rail) return;
    const prev = root.querySelector('[data-go="-1"]'), next = root.querySelector('[data-go="1"]');
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const p = max > 0 ? rail.scrollLeft / max : 1;
      if (bar) bar.style.transform = `scaleX(${Math.max(0.15, p)})`;
      if (prev) prev.disabled = rail.scrollLeft < 8;
      if (next) next.disabled = rail.scrollLeft > max - 8;
    };
    const go = (dir) => {
      const card = rail.querySelector('li');
      if (!card) return;
      const smooth = !!(window.blkoRoast && window.blkoRoast.on);
      rail.scrollBy({ left: dir * (card.getBoundingClientRect().width + 24), behavior: smooth ? 'smooth' : 'auto' });
    };
    root.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => go(parseInt(b.dataset.go, 10))));
    rail.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  }
  const all = () => document.querySelectorAll('.bblog95').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
