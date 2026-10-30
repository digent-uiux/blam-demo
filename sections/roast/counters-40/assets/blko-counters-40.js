// counters-40: parallax zoom on the photo (1.15 -> 1 through the band), hairlines draw and figures count up when the
// bar is seen. Without motion (static, reduced motion): scale 1, full hairlines, final figures (already in the markup).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, band = root.querySelector('[data-band]'), bar = root.querySelector('[data-bar]');
    if (!R || !R.on || !band) { if (bar) bar.classList.add('is-seen'); return; }
    const img = band.querySelector('.bcounters40__img');
    if (img) R.progress(band, (p) => { const k = 1 + (1 - p) * 0.15; img.style.transform = k > 1.0005 ? `scale(${k.toFixed(4)})` : ''; }, { start: 1, end: -0.15 });
    if (!bar) return;
    const nums = [...bar.querySelectorAll('[data-to]')];
    nums.forEach((n) => { n.textContent = (0).toFixed(+n.dataset.dec) + n.dataset.suf; });
    R.inView(bar, () => {
      bar.classList.add('is-seen');
      nums.forEach((n) => { const d = +n.dataset.dec; R.countUp(parseFloat(n.dataset.to), (v) => { n.textContent = v.toFixed(d) + n.dataset.suf; }, +n.dataset.ms); });
    });
  }
  const all = () => document.querySelectorAll('.bcounters40').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
