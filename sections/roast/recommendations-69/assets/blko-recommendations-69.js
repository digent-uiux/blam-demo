// recommendations-69: bundle builder (tick rows, totals tween, saving from two items), "Add bundle" posts the ticked
// variants to /cart/add.js and pings the header cart; card quick add posts its variant. On a product page with no
// recommendations rendered yet, it loads the complementary recommendations into the cards.
(() => {
  const fmt = (root, cents) => {
    const f = root.dataset.money || '${{amount}}';
    const v = cents / 100, two = v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return f.replace(/\{\{\s*(\w+)\s*\}\}/, (m, k) => k === 'amount_no_decimals' ? Math.round(v).toLocaleString('en-US')
      : k === 'amount_with_comma_separator' ? v.toFixed(2).replace('.', ',') : two);
  };
  const tween = (el, root, from, to, pre = '') => {
    const R = window.blkoRoast;
    if (!R || !R.on) { el.textContent = pre + fmt(root, to); return; }
    const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / 450); el.textContent = pre + fmt(root, from + (to - from) * (1 - (1 - k) ** 3)); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const post = (items) => fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items }) })
    .then((r) => { if (!r.ok) throw new Error(); return r.json(); });
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const boxes = [...root.querySelectorAll('[data-item]')], off = parseFloat(root.dataset.off) || 0;
    const subEl = root.querySelector('[data-sub]'), saveEl = root.querySelector('[data-save]'), totEl = root.querySelector('[data-total]'), countEl = root.querySelector('[data-count]');
    const add = root.querySelector('[data-add]');
    let last = { sub: 0, save: 0, total: 0 }, t = 0;
    const calc = () => {
      const on = boxes.filter((b) => b.checked);
      const sub = on.reduce((a, b) => a + (parseInt(b.dataset.cents, 10) || 0), 0);
      const save = on.length >= 2 ? Math.round(sub * off / 100) : 0;
      return { on, sub, save, total: sub - save };
    };
    last = calc();
    const update = () => {
      const c = calc();
      countEl.textContent = c.on.length;
      tween(subEl, root, last.sub, c.sub);
      if (c.save) tween(saveEl, root, last.save, c.save, '-'); else saveEl.textContent = root.dataset.oneMore;
      tween(totEl, root, last.total, c.total);
      if (add) add.disabled = c.on.length < 2;
      last = c;
    };
    boxes.forEach((b) => b.addEventListener('change', update));
    const label = add && add.querySelector('[data-add-label]'), base = label && label.textContent;
    if (add) add.addEventListener('click', () => {
      const c = calc(), items = c.on.map((b) => b.dataset.variant).filter(Boolean).map((id) => ({ id: +id, quantity: 1 }));
      const done = () => {
        if (window.blkoRoast) window.blkoRoast.ping(c.on.length);
        add.querySelector('[data-add-on]').hidden = false; add.querySelector('[data-add-off]').hidden = true;
        label.textContent = root.dataset.added.replace('[count]', c.on.length);
        clearTimeout(t);
        t = setTimeout(() => { add.querySelector('[data-add-on]').hidden = true; add.querySelector('[data-add-off]').hidden = false; label.textContent = base; }, 2200);
      };
      if (!items.length) { done(); return; }
      add.disabled = true;
      post(items).then(done).catch(() => { label.textContent = root.dataset.error; }).finally(() => { add.disabled = calc().on.length < 2; });
    });
    root.addEventListener('blko-ui:quick-add', (e) => {
      const id = e.detail && e.detail.variantId;
      if (!id) { if (window.blkoRoast) window.blkoRoast.ping(1); return; }
      post([{ id: +id, quantity: 1 }]).then(() => window.blkoRoast && window.blkoRoast.ping(1)).catch(() => {});
    });
    if (root.dataset.recs) {
      fetch(root.dataset.recs).then((r) => r.text()).then((html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const fresh = doc.querySelector('.brecommendations69 [data-cards]');
        if (fresh && fresh.children.length) {
          const box = root.querySelector('.brecommendations69__inner'), nb = doc.querySelector('.brecommendations69 .brecommendations69__inner');
          if (box && nb) { box.innerHTML = nb.innerHTML; delete root.dataset.bound; root.removeAttribute('data-recs'); init(root); }
        }
      }).catch(() => {});
    }
  }
  const all = () => document.querySelectorAll('.brecommendations69').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
