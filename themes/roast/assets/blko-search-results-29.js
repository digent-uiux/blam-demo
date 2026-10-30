/* search-results-29: tabs with a sliding underline, sort, clear; quick add to /cart/add.js + cart ping.
   On the search page the field submits to Shopify search and sort uses ?sort_by; elsewhere the sample cards,
   stories and pages filter as you type, like the DS demo. */
(function () {
  var post = function (items) {
    return fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart/add.js', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: items })
    }).then(function (r) { if (!r.ok) throw r; return r.json(); });
  };
  function init(root) {
    if (root.__blko29) return; root.__blko29 = true;
    root.classList.add('is-js');
    var live = root.dataset.mode === 'live';
    var $ = function (s) { return root.querySelector(s); };
    var $$ = function (s) { return Array.prototype.slice.call(root.querySelectorAll(s)); };
    var input = $('[data-q]'), clear = $('[data-clear]'), form = $('[data-form]');
    var tabs = $$('[data-tab]'), panels = $$('[data-panel]'), ind = $('[data-ind]'), bar = $('[data-tabs]');
    var grid = $('[data-grid]'), cards = $$('[data-card]'), select = $('select');
    var tab = 0;
    function measure() {
      var b = tabs[tab];
      if (!ind || !b) return;
      ind.style.left = b.offsetLeft + 'px'; ind.style.width = b.offsetWidth + 'px';
    }
    function setTab(i) {
      tab = i;
      tabs.forEach(function (b, j) { b.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
      panels.forEach(function (p, j) { p.hidden = j !== i; });
      var sb = $('[data-sortbox]'); if (sb) sb.hidden = i !== 0;
      measure();
    }
    tabs.forEach(function (b, i) {
      b.addEventListener('click', function () { setTab(i); });
      b.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        var on = tabs.filter(function (t) { return !t.disabled; }); var k = on.indexOf(b);
        var n = on[(k + (e.key === 'ArrowRight' ? 1 : -1) + on.length) % on.length];
        if (n) { n.focus(); setTab(tabs.indexOf(n)); }
      });
    });
    addEventListener('resize', measure);
    function lead() {
      var vis = cards.filter(function (c) { return !c.hidden; });
      cards.forEach(function (c) {
        c.classList.remove('is-lead');
        var m = c.querySelector('.blko-ui-product-card__media'); if (m) m.classList.remove('blko-ui-product-card__media--square');
      });
      if (grid) grid.classList.toggle('has-lead', vis.length > 2);
      if (vis.length > 2) {
        vis[0].classList.add('is-lead');
        var m = vis[0].querySelector('.blko-ui-product-card__media'); if (m) m.classList.add('blko-ui-product-card__media--square');
      }
      vis.forEach(function (c, i) { c.style.setProperty('--d', (i * 80) + 'ms'); });
    }
    function sortCards(v) {
      var list = cards.slice();
      if (v === 'rating') list.sort(function (a, b) { return b.dataset.rating - a.dataset.rating; });
      else if (v === 'price-ascending') list.sort(function (a, b) { return a.dataset.price - b.dataset.price; });
      else if (v === 'price-descending') list.sort(function (a, b) { return b.dataset.price - a.dataset.price; });
      else list.sort(function (a, b) { return a.dataset.i - b.dataset.i; });
      list.forEach(function (c) { grid.appendChild(c); });
      cards = list;
      lead();
      replay();
    }
    function replay() {
      // Cards rise again when the result set changes (motion only).
      if (!(window.blkoRoast && window.blkoRoast.on)) return;
      cards.forEach(function (c) { if (c.hidden) return; c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; });
    }
    function run(t) {
      var term = (t || '').trim().toLowerCase();
      if (input && input.value !== t) input.value = t;
      if (clear) clear.hidden = !t;
      var np = 0, ns = 0, ng = 0;
      cards.forEach(function (c) { var on = !!term && c.dataset.keys.indexOf(term) > -1; c.hidden = !on; if (on) np++; });
      $$('[data-panel="0"] [data-s-keys]').forEach(function (li) { li.hidden = !(term && li.dataset.sKeys.indexOf(term) > -1); });
      $$('[data-panel="1"] [data-s-keys]').forEach(function (li) { var on = !!term && li.dataset.sKeys.indexOf(term) > -1; li.hidden = !on; if (on) ns++; });
      $$('[data-panel="2"] [data-s-keys]').forEach(function (li) { var on = !!term && li.dataset.sKeys.indexOf(term) > -1; li.hidden = !on; if (on) ng++; });
      var counts = [np, ns, ng];
      tabs.forEach(function (b, i) { b.querySelector('[data-n]').textContent = counts[i]; b.disabled = !counts[i]; });
      var also = $('[data-also]'); if (also) also.hidden = !ns;
      var empty = np + ns + ng === 0;
      $('[data-empty]').hidden = !empty; $('[data-results]').hidden = empty; $('[data-sugg]').hidden = empty;
      $$('[data-qtext]').forEach(function (s) { s.textContent = t.trim(); });
      $('[data-e-q]').hidden = !term; $('[data-e-none]').hidden = !!term;
      var dym = $('[data-dym]'); if (dym) dym.hidden = term !== (root.dataset.dymFrom || '').toLowerCase() || !term;
      lead();
      setTab(0);
      replay();
    }
    if (!live) {
      if (input) input.addEventListener('input', function () { run(input.value); });
      if (form) form.addEventListener('submit', function (e) { e.preventDefault(); });
      root.addEventListener('click', function (e) {
        var a = e.target.closest('[data-term]');
        if (!a || !root.contains(a)) return;
        e.preventDefault(); run(a.dataset.term);
      });
      if (select) select.addEventListener('change', function () { sortCards(select.value); });
      run(input ? input.value : '');
    } else {
      if (select) select.addEventListener('change', function () {
        var u = new URL(location.href); u.searchParams.set('sort_by', select.value); location.href = u.toString();
      });
      lead();
      setTab(0);
    }
    if (clear) clear.addEventListener('click', function () {
      if (live) { input.value = ''; clear.hidden = true; } else run('');
      input.focus();
    });
    if (input && live) input.addEventListener('input', function () { if (clear) clear.hidden = !input.value; });
    root.addEventListener('blko-ui:quick-add', function (e) {
      var id = e.detail && e.detail.variantId;
      if (!id) { if (window.blkoRoast) window.blkoRoast.ping(1); return; }
      post([{ id: +id, quantity: 1 }]).then(function () { if (window.blkoRoast) window.blkoRoast.ping(1); }).catch(function () {});
    });
  }
  function boot() { document.querySelectorAll('.bsearchresults29').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
