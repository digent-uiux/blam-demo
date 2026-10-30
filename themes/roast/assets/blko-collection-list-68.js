// collection-list-68: row hover state (slide, dim the others, fill the arrow), and the cursor image trail (motion, fine
// pointer, >= 768px): tiles of the hovered row's photo (every third a sibling's) pop in at the cursor, drift, fade.
(() => {
  const STEP = 80, MAX = 6;
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const list = root.querySelector('[data-list]'), layer = root.querySelector('[data-layer]');
    if (!list) return;
    const rows = [...list.querySelectorAll('[data-row]')];
    const setActive = (r) => { rows.forEach((x) => x.classList.toggle('is-on', x === r)); list.toggleAttribute('data-active', !!r); };
    rows.forEach((r) => { const a = r.querySelector('a'); a.addEventListener('pointerenter', () => setActive(r)); a.addEventListener('focus', () => setActive(r)); a.addEventListener('blur', () => setActive(null)); });
    list.addEventListener('pointerleave', () => setActive(null));

    const R = window.blkoRoast;
    if (!layer || !list.hasAttribute('data-trail-ok') || !R || !R.on) return;
    const srcs = rows.map((r) => { const s = r.querySelector('[data-src]'); return s ? s.dataset.src : ''; });
    if (srcs.every((s) => !s)) return;
    const mq = matchMedia('(pointer: fine) and (hover: hover) and (min-width: 768px)');
    let lx = NaN, ly = NaN, n = 0, on = false; const alive = [];
    const drop = (el) => { const k = alive.indexOf(el); if (k >= 0) alive.splice(k, 1); el.remove(); };
    const spawn = (row, x, y, dx, dy) => {
      const pick = n % 3 === 2 ? (row + 1 + ((n / 3) | 0) % (rows.length - 1)) % rows.length : row;
      n++;
      const src = srcs[pick] || srcs[row]; if (!src) return;
      const el = document.createElement('div'); el.className = 'bcollectionlist68__tile';
      const im = document.createElement('img'); im.src = src; im.alt = ''; im.decoding = 'async'; el.appendChild(im);
      layer.appendChild(el); alive.push(el);
      while (alive.length > MAX) drop(alive[0]);
      const r = (Math.random() - 0.5) * 14, at = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      const a = el.animate([
        { transform: `${at} scale(.45) rotate(${r}deg)`, opacity: 0 },
        { transform: `${at} scale(1) rotate(${(r * 0.6).toFixed(2)}deg)`, opacity: 1, offset: 0.18 },
        { transform: `${at} translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(.9) rotate(${(r * 0.2).toFixed(2)}deg)`, opacity: 0 },
      ], { duration: 1150, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
      a.onfinish = () => drop(el);
    };
    const move = (e) => {
      if (!on) return;
      const rowEl = e.target.closest('[data-row]'); if (!rowEl) return;
      const row = +rowEl.dataset.row, b = list.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
      if (Number.isNaN(lx)) { lx = x; ly = y; spawn(row, x, y, 0, 24); return; }
      const d = Math.hypot(x - lx, y - ly); if (d < STEP) return;
      spawn(row, x, y, ((x - lx) / d) * 60, ((y - ly) / d) * 60 + 20); lx = x; ly = y;
    };
    const set = () => {
      on = mq.matches; list.classList.toggle('is-trail', on); layer.hidden = !on;
      if (on) srcs.forEach((s) => { if (s) { const i = new Image(); i.src = s; } }); else alive.slice().forEach(drop);
    };
    set(); mq.addEventListener('change', set);
    list.addEventListener('pointermove', move);
    list.addEventListener('pointerleave', () => { lx = NaN; ly = NaN; });
  }
  const all = () => document.querySelectorAll('.bcollectionlist68').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
