// page-header-77: category tabs, one pressed at a time, with an underline that slides to it. A tab with a blog tag opens it.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const bar = root.querySelector('[data-bar]'), ind = root.querySelector('[data-ind]');
    if (!bar || !ind) return;
    const tabs = [...bar.querySelectorAll('button[aria-pressed]')];
    const measure = () => {
      const b = bar.querySelector('[aria-pressed="true"]');
      if (!b) return;
      ind.style.left = b.offsetLeft + 'px'; ind.style.width = b.offsetWidth + 'px';
    };
    bar.classList.add('is-js'); ind.hidden = false; measure();
    tabs.forEach((t) => t.addEventListener('click', () => {
      tabs.forEach((x) => x.setAttribute('aria-pressed', x === t ? 'true' : 'false'));
      measure();
      if (t.dataset.href) location.href = t.dataset.href;
    }));
    addEventListener('resize', measure);
    if (document.fonts) document.fonts.ready.then(measure);
  }
  const all = () => document.querySelectorAll('.bpageheader77').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
