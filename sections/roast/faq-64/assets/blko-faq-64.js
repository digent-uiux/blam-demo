// faq-64: accordion toggles + live filter (matches highlighted, groups hide when empty, count line).
(() => {
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const mark = (text, q) => {
    if (!q) return esc(text);
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    return i < 0 ? esc(text) : esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
  };
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const items = [...root.querySelectorAll('[data-item]')];
    const set = (it, open) => { it.querySelector('[data-q]').setAttribute('aria-expanded', String(open)); it.querySelector('[data-a]').classList.toggle('is-open', open); };
    items.forEach((it) => it.querySelector('[data-q]').addEventListener('click', () => set(it, it.querySelector('[data-q]').getAttribute('aria-expanded') !== 'true')));
    const input = root.querySelector('[data-input]'), clear = root.querySelector('[data-clear]'), count = root.querySelector('[data-count]'), none = root.querySelector('[data-none]');
    if (!input) return;
    const state = new Map(items.map((it) => [it, it.querySelector('[data-q]').getAttribute('aria-expanded') === 'true']));
    const run = () => {
      const q = input.value.trim(), t = q.toLowerCase();
      clear.hidden = !input.value;
      let n = 0;
      root.querySelectorAll('[data-group]').forEach((g) => {
        let gn = 0;
        g.querySelectorAll('[data-item]').forEach((it) => {
          const qe = it.querySelector('[data-q] [data-text]'), ae = it.querySelector('[data-a] [data-text]');
          const hit = !t || (qe.dataset.text + ' ' + ae.dataset.text).toLowerCase().includes(t);
          it.hidden = !hit;
          if (hit) { gn++; qe.innerHTML = mark(qe.dataset.text, q); ae.innerHTML = mark(ae.dataset.text, q); set(it, t ? true : state.get(it)); }
        });
        g.hidden = gn === 0;
        const gc = g.querySelector('[data-gcount]'); if (gc) gc.textContent = gn;
        n += gn;
      });
      count.textContent = !t ? count.dataset.all : (n === 1 ? count.dataset.one : count.dataset.many).replace('[n]', n).replace('[q]', q);
      none.hidden = n !== 0;
    };
    items.forEach((it) => it.querySelector('[data-q]').addEventListener('click', () => { if (!input.value.trim()) state.set(it, it.querySelector('[data-q]').getAttribute('aria-expanded') === 'true'); }));
    input.addEventListener('input', run);
    clear.addEventListener('click', () => { input.value = ''; run(); input.focus(); });
  }
  const all = () => document.querySelectorAll('.bfaq64').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
