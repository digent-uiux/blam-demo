// collection-banner-89: the photo drifts with a slow scroll parallax (settled at -5% without motion); pills pull magnetically.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast;
    if (!R) return;
    const grid = root.querySelector('[data-mag]'), panel = root.querySelector('[data-panel]');
    if (grid) R.magnetic(grid, 4);
    const img = panel && panel.querySelector('.bcollectionbanner89__img');
    if (panel && img) R.progress(panel, (p) => { img.style.transform = `translate3d(0, ${((0.5 - p) * 10).toFixed(2)}%, 0)`; }, { start: 1, end: -0.4 });
  }
  const all = () => document.querySelectorAll('.bcollectionbanner89').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
