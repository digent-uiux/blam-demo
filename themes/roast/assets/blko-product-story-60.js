// product-story-60: the photo opens from an inset rounded clip as the band scrolls in, and drifts (settled without motion).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, band = root.querySelector('[data-band]'), frame = root.querySelector('[data-frame]');
    if (!R || !R.on || !band || !frame) return;
    const img = frame.querySelector('.bproductstory60__img');
    let p = 1, drift = 1;
    const paint = () => {
      const i = (1 - p) * 7;
      frame.style.clipPath = `inset(${i.toFixed(2)}% ${(i * 1.4).toFixed(2)}% ${i.toFixed(2)}% round ${(i * 4).toFixed(1)}px)`;
      if (img) img.style.transform = `translate3d(0, ${((0.5 - drift) * 10).toFixed(2)}%, 0) scale(${(1 + (1 - p) * 0.08).toFixed(3)})`;
    };
    R.progress(band, (v) => { p = v; paint(); }, { start: 1, end: 0.25 });
    R.progress(band, (v) => { drift = v; paint(); }, { start: 1, end: -0.6 });
  }
  const all = () => document.querySelectorAll('.bproductstory60').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
