// product-detail-41: the photo in view (desktop: nearest the viewport centre; phones: the swipe row's page) drives the
// thumb marker, the notes bar (pill, counter, line) and the phone dots; thumbs, chips and dots jump to a photo.
// Options pick a variant (live) or a size price (preview); one-time / subscribe and the cadence change the price; the
// quantity multiplies the button totals. Add to bag posts to /cart/add.js (live, with the selling plan when
// subscribing), then pings the header bag and shows "Added" for 2.2s. Accordions open one at a time.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const g = root.querySelector('[data-root]'); if (!g) return;
    const R = window.blkoRoast, motion = !!(R && R.on);
    const d = g.dataset, live = d.live === 'true';
    const money = (c) => { const v = Math.round(c) / 100; return d.money.replace(/0([.,]00)?/, v % 1 ? v.toFixed(2) : String(v)); };
    const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];

    // Gallery
    const row = $('[data-row]'), figs = $$('[data-fig]'), N = figs.length;
    const chips = $('[data-chips]'), chipBtns = $$('.bproductdetail41__chip'), thumbs = $$('.bproductdetail41__thumb'), dots = $$('.bproductdetail41__dot');
    const mark = $('[data-mark]'), line = $('[data-line]'), noteEl = $('[data-note]'), curs = $$('[data-cur]');
    let active = 0;
    const setActive = (i) => {
      if (i === active || i < 0 || i >= N) return;
      active = i;
      if (mark) mark.style.setProperty('--a', i);
      if (chips) chips.style.setProperty('--a', i);
      chipBtns.forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
      dots.forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
      thumbs.forEach((b, k) => { if (k === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
      const c = chipBtns[i];
      if (c && line) line.textContent = c.dataset.line;
      if (c && noteEl) noteEl.textContent = c.dataset.label;
      curs.forEach((e) => { e.textContent = String(i + 1).padStart(2, '0'); });
    };
    const swiping = () => row && row.scrollWidth > row.clientWidth + 4;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!N) return;
      if (swiping()) { setActive(Math.min(N - 1, Math.max(0, Math.round(row.scrollLeft / row.clientWidth)))); return; }
      const mid = innerHeight / 2; let best = 0, dist = Infinity;
      figs.forEach((f, k) => { const b = f.getBoundingClientRect(); const dd = Math.abs(b.top + b.height / 2 - mid); if (dd < dist) { dist = dd; best = k; } });
      setActive(best);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    if (row) row.addEventListener('scroll', on, { passive: true });
    const go = (i) => {
      const behavior = motion ? 'smooth' : 'auto';
      if (swiping()) row.scrollTo({ left: i * row.clientWidth, behavior });
      else if (figs[i]) figs[i].scrollIntoView({ behavior, block: 'center' });
      setActive(i);
    };
    $$('[data-go]').forEach((b) => b.addEventListener('click', () => go(+b.dataset.go)));

    // Profile bars
    const prof = $('[data-prof]');
    if (prof) { if (motion && R.inView) R.inView(prof, () => prof.classList.add('is-seen')); else prof.classList.add('is-seen'); }

    // Price state
    const variants = (() => { const j = $('[data-variants]'); try { return j ? JSON.parse(j.textContent) : null; } catch (e) { return null; } })();
    let price = Number(d.base), qty = 1, sub = false, variantId = d.variant || '';
    const pct = Number(d.pct) || 0;
    const subOf = (p) => Math.floor(p * (100 - pct) / 100);
    const cards = $$('[data-card]'), buys = $$('[data-buy]'), sel = root.querySelector('.bproductdetail41__sel');
    const adds = $$('[data-add]'), msg = $('[data-msg]');
    const draw = () => {
      const unit = sub ? subOf(price) : price;
      $$('[data-price]').forEach((e) => { e.textContent = money(unit); });
      const was = $('[data-was]'); if (was) { was.hidden = !sub; was.querySelector('[data-was-v]').textContent = money(price); }
      const once = $('[data-once]'); if (once) once.textContent = money(price);
      const sp = $('[data-subp]'); if (sp) sp.textContent = money(subOf(price));
      $$('[data-sum]').forEach((e) => { e.textContent = money(unit * qty); });
      const mp = $('[data-mprice]'); if (mp) mp.textContent = money(unit);
      const ms = $('[data-msub]'); if (ms) ms.textContent = sub ? ' · ' + ms.dataset.word : '';
      const cl = $('[data-cadline]'); if (cl) cl.textContent = sub && sel ? ' · ' + sel.options[sel.selectedIndex].text.toLowerCase() : '';
      cards.forEach((c) => c.classList.toggle('is-on', (c.dataset.card === 'sub') === sub));
    };
    const setSub = (v) => { sub = v; buys.forEach((b) => { b.checked = (b.value === 'sub') === v; }); draw(); };
    buys.forEach((b) => b.addEventListener('change', () => setSub(b.value === 'sub')));
    if (sel) sel.addEventListener('change', () => setSub(true));
    const groups = $$('[data-group]');
    const pressed = (gr) => { const b = gr.querySelector('[aria-pressed="true"]'); return b ? b.value : null; };
    const match = () => {
      if (!variants) return;
      const vals = groups.slice().sort((a, b) => a.dataset.group - b.dataset.group).map(pressed);
      const v = variants.find((x) => x.options.every((o, i) => o === vals[i]));
      if (v) { variantId = String(v.id); price = v.price; adds.forEach((a) => { a.disabled = !v.available; }); }
    };
    root.addEventListener('blko-ui:change', (e) => {
      const t = e.target;
      if (t.matches('blko-ui-quantity')) { qty = e.detail.value; draw(); return; }
      if (!t.matches('[data-blko-ui-option]')) return;
      const gr = t.closest('[data-group]');
      const sv = gr && gr.querySelector('[data-sel]'); if (sv) sv.textContent = t.value;
      if (live) match(); else if (gr && gr.hasAttribute('data-demo-sizes')) price = Number(t.value);
      draw();
    });

    // Add to bag
    let doneT = 0;
    const done = () => {
      adds.forEach((a) => { a.querySelector('[data-l-add]').hidden = true; a.querySelector('[data-l-done]').hidden = false; });
      if (R && R.ping) R.ping(qty);
      clearTimeout(doneT);
      doneT = setTimeout(() => adds.forEach((a) => { a.querySelector('[data-l-add]').hidden = false; a.querySelector('[data-l-done]').hidden = true; }), 2200);
    };
    adds.forEach((a) => a.addEventListener('click', async () => {
      if (msg) msg.textContent = '';
      if (!live || !variantId) { done(); return; }
      const item = { id: +variantId, quantity: qty };
      if (sub && sel && sel.value) item.selling_plan = +sel.value;
      adds.forEach((x) => x.setAttribute('aria-busy', 'true'));
      try {
        const r = await fetch(((window.Shopify && Shopify.routes && Shopify.routes.root) || '/') + 'cart/add.js', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [item] })
        });
        if (!r.ok) throw new Error(r.status);
        done();
      } catch (e) { if (msg) msg.textContent = msg.dataset.error; }
      adds.forEach((x) => x.removeAttribute('aria-busy'));
    }));

    // Wishlist heart
    const heart = $('[data-heart]');
    if (heart) heart.addEventListener('click', () => {
      const v = heart.getAttribute('aria-pressed') !== 'true';
      heart.setAttribute('aria-pressed', String(v));
      heart.setAttribute('aria-label', v ? heart.dataset.saved : heart.dataset.save);
    });

    // Accordions (one open at a time)
    const accs = $$('[data-acc]');
    accs.forEach((b) => b.addEventListener('click', () => {
      const open = b.getAttribute('aria-expanded') !== 'true';
      accs.forEach((x) => {
        const on = x === b && open;
        x.setAttribute('aria-expanded', String(on));
        const p = document.getElementById(x.getAttribute('aria-controls'));
        if (p) { p.classList.toggle('is-open', on); p.firstElementChild.inert = !on; }
      });
    }));
  }
  const all = () => document.querySelectorAll('.bproductdetail41').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
