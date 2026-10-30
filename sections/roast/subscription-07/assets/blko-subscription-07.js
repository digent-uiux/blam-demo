// subscription-07: cadence segmented control (arrow keys), bags stepper, roast-style chips, price per delivery (tweens
// with motion), photo parallax (motion), and the CTA: /cart/add.js when a product is set, then the header cart ping.
(() => {
  function fmtMoney(cents, fmt) {
    const n = cents / 100, whole = cents % 100 === 0;
    const dot = (d) => n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: 2 });
    const comma = (d) => n.toLocaleString('de-DE', { minimumFractionDigits: d, maximumFractionDigits: 2 });
    if (!fmt || !/\{\{\s*\w+\s*\}\}/.test(fmt)) return '$' + dot(whole ? 0 : 2);
    return fmt.replace(/\{\{\s*(\w+)\s*\}\}/, (_, k) => {
      if (k === 'amount_no_decimals') return Math.round(n).toLocaleString('en-US');
      if (k === 'amount_with_comma_separator') return comma(whole ? 0 : 2);
      if (k === 'amount_no_decimals_with_comma_separator') return Math.round(n).toLocaleString('de-DE');
      return dot(whole ? 0 : 2);
    });
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, on = !!(R && R.on);
    const b = root.querySelector('[data-builder]');
    if (!b) return;
    const per = +b.dataset.per || 0, fmt = b.dataset.fmt;
    const seg = b.querySelector('[data-seg]'), opts = seg ? [...seg.querySelectorAll('[role="radio"]')] : [];
    const qtyEl = b.querySelector('[data-qty]'), steps = [...b.querySelectorAll('[data-step]')];
    const chips = [...b.querySelectorAll('[data-style]')], styleOut = b.querySelector('[data-style-out]');
    const totalEl = b.querySelector('[data-total]'), fullEl = b.querySelector('[data-full]'), saveEl = b.querySelector('[data-save]'), sr = b.querySelector('[data-sr]');
    const plansEl = b.querySelector('[data-plans]'); let plans = [];
    try { plans = plansEl ? JSON.parse(plansEl.textContent) : []; } catch (e) { plans = []; }
    let cad = 0, bags = +b.dataset.bags || 2, shown = null, raf = 0;
    const saveTpl = saveEl ? saveEl.textContent.replace(/\d+/, '#') : '';
    const tween = (to) => {
      if (shown === null || !on) { shown = to; totalEl.textContent = fmtMoney(Math.round(to), fmt); return; }
      cancelAnimationFrame(raf); const a = shown, t0 = performance.now();
      const step = (t) => { const k = Math.min(1, (t - t0) / 500); shown = a + (to - a) * (1 - (1 - k) ** 3); totalEl.textContent = fmtMoney(Math.round(shown), fmt); if (k < 1) raf = requestAnimationFrame(step); };
      raf = requestAnimationFrame(step);
    };
    const update = (first) => {
      const off = opts[cad] ? +opts[cad].dataset.off : 0, full = per * bags, total = Math.round(full * (100 - off) / 100);
      if (qtyEl) qtyEl.textContent = bags;
      steps.forEach((s) => { s.disabled = (+s.dataset.step < 0 && bags <= 1) || (+s.dataset.step > 0 && bags >= 4); });
      if (fullEl) fullEl.textContent = fmtMoney(full, fmt);
      if (saveEl) saveEl.textContent = saveTpl.replace('#', off);
      if (first) shown = total; else tween(total);
      if (sr && !first && opts[cad]) sr.textContent = `${fmtMoney(total, fmt)} / ${opts[cad].dataset.weeks}`;
    };
    const pick = (i, focus) => {
      cad = i; seg.style.setProperty('--i', i);
      opts.forEach((o, j) => { o.setAttribute('aria-checked', j === i ? 'true' : 'false'); o.tabIndex = j === i ? 0 : -1; });
      if (focus) opts[i].focus();
      update();
    };
    opts.forEach((o, i) => {
      o.addEventListener('click', () => pick(i));
      o.addEventListener('keydown', (e) => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return; e.preventDefault(); pick((i + d + opts.length) % opts.length, true); });
    });
    steps.forEach((s) => s.addEventListener('click', () => { bags = Math.min(4, Math.max(1, bags + +s.dataset.step)); update(); }));
    chips.forEach((c) => c.addEventListener('click', () => { chips.forEach((x) => x.setAttribute('aria-pressed', x === c ? 'true' : 'false')); if (styleOut) styleOut.textContent = c.dataset.style; }));
    update(true);

    const add = root.querySelector('[data-add]'), err = root.querySelector('[data-err]');
    if (add) add.addEventListener('click', async () => {
      const id = b.dataset.variant;
      if (!id) { if (R) R.ping(bags); return; }
      const item = { id: +id, quantity: bags };
      if (plans[cad]) item.selling_plan = plans[cad];
      const props = {}; const st = chips.find((c) => c.getAttribute('aria-pressed') === 'true'); if (st) props['Roast style'] = st.dataset.style;
      item.properties = props;
      add.disabled = true; if (err) err.hidden = true;
      try {
        const r = await fetch(((window.Shopify && Shopify.routes && Shopify.routes.root) || '/') + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [item] }) });
        if (!r.ok) throw new Error(r.status);
        if (R) R.ping(bags);
        document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
      } catch (e) { if (err) err.hidden = false; }
      add.disabled = false;
    });

    const frame = root.querySelector('[data-frame]'), img = frame && frame.querySelector('.bsubscription07__img');
    if (on && frame && img) R.progress(frame, (p) => { img.style.transform = `translate3d(0, ${((0.5 - p) * 12).toFixed(2)}%, 0)`; }, { start: 1, end: -0.4 });
  }
  const all = () => document.querySelectorAll('.bsubscription07').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
