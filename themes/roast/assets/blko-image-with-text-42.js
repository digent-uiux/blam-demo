// image-with-text-42: the photo drifts up into place as it scrolls in (motion only; static = settled).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const media = root.querySelector('[data-media]'), photo = root.querySelector('[data-drift]');
    if (media && photo && window.blkoRoast) window.blkoRoast.progress(media, (d) => { photo.style.translate = `0 ${((1 - d) * 40).toFixed(1)}px`; }, { start: 1, end: 0 });
  }
  const all = () => document.querySelectorAll('.bimagewithtext42').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
