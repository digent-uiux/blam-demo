// footer-30: the wordmark letters rise when the footer scrolls in (motion only; static shows them set).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const mark = root.querySelector('[data-mark]');
    if (!mark) return;
    if (window.blkoRoast) window.blkoRoast.inView(mark, () => mark.classList.add('is-seen'), '0px 0px -5% 0px');
    else mark.classList.add('is-seen');
  }
  const all = () => document.querySelectorAll('.bfooter30').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
