// blog-93: hovering or focusing a panel opens it (one open at a time; the first is open in the markup).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const panels = [...root.querySelectorAll('[data-panel]')];
    const open = (p) => panels.forEach((x) => x.toggleAttribute('data-open', x === p));
    panels.forEach((p) => {
      p.addEventListener('mouseenter', () => open(p));
      const a = p.querySelector('a'); if (a) a.addEventListener('focus', () => open(p));
    });
  }
  const all = () => document.querySelectorAll('.bblog93').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
