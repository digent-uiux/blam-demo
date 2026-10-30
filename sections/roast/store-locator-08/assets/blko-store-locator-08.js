// store-locator-08: tabs (click + arrow keys) with a sliding underline, the panel photo wipes in on switch, and each
// panel's hours are formatted with today marked and the open-now status worked out from the visitor's clock.
(() => {
  const fmt = (h) => `${h > 12 ? h - 12 : h} ${h >= 12 ? 'pm' : 'am'}`;
  function hours(root, panel) {
    const d = new Date(), day = d.getDay(), hour = d.getHours() + d.getMinutes() / 60;
    const L = root.querySelector('[data-i18n]').dataset, closed = L.closed, today = L.closedToday;
    let o = 0, c = 0;
    panel.querySelectorAll('tr[data-day]').forEach((tr) => {
      const a = parseFloat(tr.dataset.open), b = parseFloat(tr.dataset.close), shut = isNaN(a) || isNaN(b) || a === b;
      tr.querySelector('[data-range]').textContent = shut ? closed : `${fmt(a)} – ${fmt(b)}`;
      const t = +tr.dataset.day === day;
      tr.classList.toggle('is-today', t); tr.querySelector('[data-today]').hidden = !t;
      if (t) { o = shut ? 0 : a; c = shut ? 0 : b; }
    });
    const st = panel.querySelector('[data-status]'), dot = panel.querySelector('[data-dot]');
    const isOpen = o !== c && hour >= o && hour < c;
    st.textContent = isOpen ? L.openNow.replace('[c]', fmt(c)) : o === c ? today : L.closedNow.replace('[o]', fmt(o));
    dot.classList.toggle('is-closed', !isOpen);
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const tabs = [...root.querySelectorAll('[data-tab]')], panels = [...root.querySelectorAll('[data-panel]')], bar = root.querySelector('[data-bar]');
    const place = (t) => { if (!bar || !t) return; bar.style.left = t.offsetLeft + 'px'; bar.style.width = t.offsetWidth + 'px'; bar.classList.add('is-set'); };
    const pick = (k, focus) => {
      tabs.forEach((t, i) => { const on = i === k; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
      panels.forEach((p, i) => { p.hidden = i !== k; p.classList.remove('is-anim'); });
      void panels[k].offsetWidth; panels[k].classList.add('is-anim');
      if (focus) tabs[k].focus();
      place(tabs[k]);
    };
    tabs.forEach((t, k) => {
      t.addEventListener('click', () => pick(k));
      t.addEventListener('keydown', (e) => {
        const n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { e.preventDefault(); pick((k + n + tabs.length) % tabs.length, true); }
      });
    });
    panels.forEach((p) => hours(root, p));
    place(tabs[0]);
    addEventListener('resize', () => place(tabs.find((t) => t.getAttribute('aria-selected') === 'true')));
  }
  const all = () => document.querySelectorAll('.bstorelocator08').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
