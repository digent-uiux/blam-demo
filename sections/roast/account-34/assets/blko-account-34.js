// account-34: the side nav switches panels and slides its indicator; the cadence control moves the next roast date,
// Skip next pushes it a cycle (Undo resets), Pause greys it out; Reorder adds an order's variants with /cart/add.js
// (preview rows just ping) and pings the header cart.
(() => {
  const DAY = 864e5;
  const fmt = (d) => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const nav = root.querySelector('[data-nav]'), ind = root.querySelector('[data-ind]');
    const btns = [...root.querySelectorAll('[data-panel-btn]')], panels = [...root.querySelectorAll('[data-panel]')];
    const place = () => {
      const b = btns.find((x) => x.classList.contains('is-on'));
      if (!b || !ind) return;
      Object.assign(ind.style, { left: b.offsetLeft + 'px', top: b.offsetTop + 'px', width: b.offsetWidth + 'px', height: b.offsetHeight + 'px' });
      ind.classList.add('is-set'); nav.classList.add('has-ind');
    };
    btns.forEach((b) => b.addEventListener('click', () => {
      btns.forEach((x) => { const on = x === b; x.classList.toggle('is-on', on); if (on) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current'); });
      panels.forEach((p) => { const on = p.dataset.panel === b.dataset.panelBtn; p.hidden = !on; p.classList.remove('is-in'); if (on) { void p.offsetWidth; p.classList.add('is-in'); } });
      place();
    }));
    place(); addEventListener('resize', place);

    const sub = root.querySelector('[data-sub]');
    if (sub) {
      const parts = (sub.dataset.base || '').split('-').map(Number), base = new Date(parts[0], parts[1] - 1, parts[2]);
      const next = sub.querySelector('[data-next]'), box = sub.querySelector('[data-nextbox]'), pill = sub.querySelector('[data-segpill]');
      const segs = [...sub.querySelectorAll('[data-weeks]')], skip = sub.querySelector('[data-skip]'), pause = sub.querySelector('[data-pause]'), undo = sub.querySelector('[data-undo]');
      const state = sub.querySelector('[data-state]'), lbl = sub.querySelector('[data-pause-lbl]');
      const cad = root.querySelector('[data-cadence]');
      let weeks = 2, skips = 0, paused = false;
      const render = (flip) => {
        const d = new Date(base.getTime() + ((weeks - 2) * 7 + skips * weeks * 7) * DAY);
        next.textContent = paused ? next.dataset.hold : (isNaN(d) ? next.textContent : fmt(d));
        if (flip) { next.classList.remove('is-flip'); void next.offsetWidth; next.classList.add('is-flip'); }
        box.classList.toggle('is-paused', paused);
        segs.forEach((s) => { s.setAttribute('aria-checked', String(+s.dataset.weeks === weeks)); s.disabled = paused; });
        pill.style.transform = `translateX(${(weeks - 2) * 100}%)`;
        skip.disabled = paused; undo.hidden = !(skips > 0 && !paused);
        pause.setAttribute('aria-pressed', String(paused));
        sub.querySelector('[data-pause-ic]').hidden = paused; sub.querySelector('[data-play-ic]').hidden = !paused;
        lbl.textContent = paused ? lbl.dataset.lResume : lbl.dataset.lPause;
        state.textContent = paused ? state.dataset.paused : state.dataset.active;
        if (cad) cad.textContent = cad.dataset.tpl.replace('[cadence]', weeks);
      };
      segs.forEach((s) => s.addEventListener('click', () => { weeks = +s.dataset.weeks; render(true); }));
      skip.addEventListener('click', () => { skips += 1; render(true); });
      undo.addEventListener('click', () => { skips = 0; render(true); });
      pause.addEventListener('click', () => { paused = !paused; render(true); });
    }

    root.querySelectorAll('[data-reorder]').forEach((b) => b.addEventListener('click', async () => {
      const qty = parseInt(b.dataset.qty, 10) || 1, items = (b.dataset.reorder || '').split(',').filter(Boolean).map((x) => { const [id, q] = x.split(':'); return { id: +id, quantity: +q || 1 }; });
      b.disabled = true;
      try { if (items.length) { const r = await fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items }) }); if (!r.ok) throw new Error(); } }
      catch (e) { b.disabled = false; return; }
      if (window.blkoRoast) window.blkoRoast.ping(qty);
      const l = b.querySelector('[data-ro-lbl]'); if (l) l.textContent = l.dataset.done;
      b.classList.replace('blko-ui-button--outline', 'blko-ui-button--secondary'); b.disabled = false;
    }));
  }
  const all = () => document.querySelectorAll('.baccount34').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
