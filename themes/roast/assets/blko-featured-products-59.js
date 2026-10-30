// featured-products-59: filter chips with a sliding pill (cards re-flow into the two columns), pick photo parallax
// (motion), quick add -> /cart/add.js (when the card has a variant) + header cart ping.
(() => {
  const post = (items) => fetch(((window.Shopify && Shopify.routes && Shopify.routes.root) || '/') + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items }) })
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast;
    const bar = root.querySelector('[data-bar]'), pill = root.querySelector('[data-pill]');
    const chips = bar ? [...bar.querySelectorAll('[data-chip]')] : [];
    const cols = [...root.querySelectorAll('[data-col]')];
    const cards = cols.flatMap((c) => [...c.children]).sort((a, b) => parseInt(a.style.getPropertyValue('--d'), 10) - parseInt(b.style.getPropertyValue('--d'), 10));
    const place = () => {
      const b = chips.find((c) => c.getAttribute('aria-pressed') === 'true');
      if (!b || !pill) return;
      pill.style.left = b.offsetLeft + 'px'; pill.style.width = b.offsetWidth + 'px';
    };
    if (pill && chips.length) { pill.hidden = false; bar.classList.add('has-pill'); place(); addEventListener('resize', place); }
    chips.forEach((c) => c.addEventListener('click', () => {
      chips.forEach((x) => x.setAttribute('aria-pressed', x === c ? 'true' : 'false'));
      place();
      const tag = c.dataset.chip;
      const shown = cards.filter((k) => !tag || (k.dataset.tags || '').includes(',' + tag.replace(/\s/g, '') + ','));
      cards.forEach((k) => { k.hidden = !shown.includes(k); });
      shown.forEach((k, n) => {
        cols[n % 2].appendChild(k); k.style.setProperty('--d', `${140 + n * 90}ms`);
        if (R && R.on) { k.style.animation = 'none'; void k.offsetWidth; k.style.animation = ''; }
      });
    }));
    const pick = root.querySelector('[data-pick]'), img = pick && pick.querySelector('.bfeaturedproducts59__pimg');
    if (R && R.on && pick && img) R.progress(pick, (p) => { img.style.transform = `translate3d(0, ${((0.5 - p) * 10).toFixed(2)}%, 0)`; }, { start: 1, end: -0.2 });
    root.addEventListener('blko-ui:quick-add', (e) => {
      const id = e.detail && e.detail.variantId;
      if (!id) { if (R) R.ping(1); return; }
      post([{ id: +id, quantity: 1 }]).then(() => { if (R) R.ping(1); document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true })); }).catch(() => {});
    });
  }
  const all = () => document.querySelectorAll('.bfeaturedproducts59').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
