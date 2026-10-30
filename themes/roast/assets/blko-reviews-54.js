// reviews-54: sort the written reviews (most helpful / newest / highest rated) into the two offset columns, cards rise
// again on re-sort; the Helpful button toggles a vote (+1). The score count-up is the kit's [data-rm-count].
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const sel = root.querySelector('select'), cols = [...root.querySelectorAll('[data-col]')];
    const cards = [...root.querySelectorAll('[data-card]')];
    root.querySelectorAll('[data-help]').forEach((b) => b.addEventListener('click', () => {
      const on = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.querySelector('[data-n]').textContent = String(parseInt(b.dataset.help, 10) + (on ? 1 : 0));
    }));
    if (!sel || cols.length < 2 || !cards.length) return;
    const num = (c, k) => parseFloat(c.dataset[k]) || 0, ts = (c) => Date.parse(c.dataset.date) || 0;
    sel.addEventListener('change', () => {
      const k = sel.value;
      const list = [...cards].sort((a, b) => k === 'newest' ? ts(b) - ts(a) : k === 'rating' ? num(b, 'stars') - num(a, 'stars') || num(b, 'helpful') - num(a, 'helpful') : num(b, 'helpful') - num(a, 'helpful'));
      list.forEach((c, i) => {
        c.style.setProperty('--d', `${160 + i * 100}ms`);
        cols[i % 2].appendChild(c);
        if (window.blkoRoast && window.blkoRoast.on) { c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; }
      });
    });
  }
  const all = () => document.querySelectorAll('.breviews54').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
