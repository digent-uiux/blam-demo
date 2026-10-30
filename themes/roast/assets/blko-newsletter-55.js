// newsletter-55: the photo opens from a clipped inset to its full frame while it scrolls in, its zoom settles (motion
// only; static shows the full frame).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, photo = root.querySelector('[data-photo]'), clip = root.querySelector('[data-clip]');
    if (!R || !R.on || !photo || !clip) return;
    const img = clip.querySelector('.bnewsletter55__img');
    R.progress(photo, (p) => {
      const k = 1 - p, on = k > 0.001;
      clip.style.clipPath = on ? `inset(${(k * 16).toFixed(2)}% ${(k * 10).toFixed(2)}% round 10px)` : '';
      if (img) img.style.transform = on ? `scale(${(1 + k * 0.2).toFixed(3)})` : '';
    }, { start: 0.95, end: 0.3 });
  }
  const all = () => document.querySelectorAll('.bnewsletter55').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
