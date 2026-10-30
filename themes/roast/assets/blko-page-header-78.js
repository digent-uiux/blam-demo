// page-header-78: the photo drifts slower than the page (motion only).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const img = root.querySelector('.bpageheader78__img');
    if (!img || !(window.blkoRoast && window.blkoRoast.on)) return;
    let raf = 0;
    const update = () => { raf = 0; img.style.translate = `0 ${(Math.min(scrollY, innerHeight) * 0.25).toFixed(1)}px`; };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
  }
  const all = () => document.querySelectorAll('.bpageheader78').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
