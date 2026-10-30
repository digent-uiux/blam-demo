/* collection-grid-49: on a collection page Load more fetches the next page and appends its cards; filters and sort
   come from the URL (Filter bar 31 navigates). Elsewhere the sample cards follow Filter bar 31's "roast:collection"
   event (filters, sort, density) with client paging, like the DS. Quick add posts /cart/add.js and pings the cart. */
(function () {
  var post = function (items) {
    return fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart/add.js', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: items })
    }).then(function (r) { if (!r.ok) throw r; return r.json(); });
  };
  var SORT = {
    'created-descending': function (a, b) { return a.dataset.fresh - b.dataset.fresh; },
    'price-ascending': function (a, b) { return a.dataset.price - b.dataset.price; },
    'price-descending': function (a, b) { return b.dataset.price - a.dataset.price; },
    'best-rated': function (a, b) { return (b.dataset.rating - a.dataset.rating) || (b.dataset.count - a.dataset.count); }
  };
  function init(root) {
    if (root.__blko49) return; root.__blko49 = true;
    var R = window.blkoRoast;
    var live = root.dataset.mode === 'live';
    var $ = function (s) { return root.querySelector(s); };
    var $$ = function (s, el) { return Array.prototype.slice.call((el || root).querySelectorAll(s)); };
    var grid = $('[data-grid]'), nav = $('[data-nav]'), empty = $('[data-empty]'), tile = $('[data-tile]');
    var more = $('[data-more]'), moreWrap = $('[data-more-wrap]'), all = $('[data-all]');
    var endEl = $('[data-end]'), totalEl = $('[data-total]'), fill = $('[data-fill]');
    var pagesOl = $('.bcollectiongrid49__pages'), nextLi = $('[data-nextli]');
    var PER = +root.dataset.per || 8, TILE = +root.dataset.tileAfter || 3;
    var replay = function (els) {
      if (!(R && R.on)) return;
      els.forEach(function (e) { e.style.animation = 'none'; void e.offsetWidth; e.style.animation = ''; });
    };
    function setDensity(n) {
      if (!grid || !n) return;
      grid.classList.remove('bcollectiongrid49__grid--2', 'bcollectiongrid49__grid--3', 'bcollectiongrid49__grid--4');
      grid.classList.add('bcollectiongrid49__grid--' + n);
    }
    function setProgress(endTxt, end, total) {
      if (endEl) endEl.textContent = endTxt;
      if (totalEl) totalEl.textContent = total;
      if (fill) fill.style.transform = 'scaleX(' + (total ? end / total : 0) + ')';
    }
    root.addEventListener('blko-ui:quick-add', function (e) {
      var id = e.detail && e.detail.variantId;
      if (!id) { if (R) R.ping(1); return; }
      post([{ id: +id, quantity: 1 }]).then(function () { if (R) R.ping(1); }).catch(function () {});
    });
    var reset = $('[data-reset]');
    if (reset) reset.addEventListener('click', function () {
      dispatchEvent(new CustomEvent('roast:collection-reset'));
      if (live && reset.dataset.href && !document.querySelector('[data-seg-roast]')) location.href = reset.dataset.href;
    });

    if (live) {
      // Load more: append the next page's cards.
      var next = root.dataset.next, end = +root.dataset.end, total = +root.dataset.total, page = +root.dataset.page;
      if (more) more.addEventListener('click', function () {
        if (!next) return;
        more.disabled = true;
        fetch(next).then(function (r) { return r.text(); }).then(function (html) {
          var doc = new DOMParser().parseFromString(html, 'text/html');
          var other = doc.querySelector('.bcollectiongrid49');
          var cards = other ? $$('[data-card]', other) : [];
          var added = cards.map(function (c, i) { var n = document.importNode(c, true); n.style.setProperty('--d', (80 + i * 70) + 'ms'); grid.appendChild(n); return n; });
          replay(added);
          end += added.length; page += 1;
          next = other ? other.dataset.next : '';
          var start = +root.dataset.start;
          setProgress(start ? (start + 1) + '–' + end : String(end), end, total);
          var pg = root.querySelector('[data-pg="' + page + '"]'); if (pg) pg.setAttribute('aria-current', 'page');
          var nl = $('[data-next-link]'); if (nl) { if (next) nl.href = next; else nl.removeAttribute('href'); }
          more.disabled = false;
          if (!next) { moreWrap.hidden = true; all.hidden = false; }
        }).catch(function () { more.disabled = false; });
      });
      addEventListener('roast:collection', function (e) { if (e.detail) setDensity(e.detail.density); });
      return;
    }

    // Sample mode: filters, sort and paging on the client.
    var items = $$('[data-card]');
    var f = { roast: null, process: 'Any', origins: [], min: -Infinity, max: Infinity, sort: '' };
    var page = 1, upto = 1;
    function list() {
      var l = items.filter(function (c) {
        var d = c.dataset;
        return (f.roast === null || f.roast === +d.roast) && (f.process === 'Any' || f.process === d.process) && (!f.origins.length || f.origins.indexOf(d.origin) > -1) && +d.price >= f.min && +d.price <= f.max;
      });
      var s = SORT[f.sort];
      l.sort(s || function (a, b) { return a.dataset.i - b.dataset.i; });
      if (s) l.sort(function (a, b) { return s(a, b) || a.dataset.i - b.dataset.i; });
      return l;
    }
    function render(batchFrom, anim) {
      var l = list();
      var pages = Math.max(1, Math.ceil(l.length / PER));
      var start = (page - 1) * PER;
      var shown = l.slice(start, upto * PER);
      var end = start + shown.length;
      items.forEach(function (c) { c.hidden = shown.indexOf(c) < 0; });
      shown.forEach(function (c, i) {
        grid.appendChild(c);
        c.style.setProperty('--d', (80 + (i >= batchFrom && batchFrom > 0 ? i - batchFrom : i) * 70) + 'ms');
        if (i === TILE - 1 && tile && page === 1) grid.appendChild(tile);
      });
      if (tile) {
        tile.hidden = !(page === 1 && shown.length >= TILE);
        tile.style.setProperty('--d', (80 + TILE * 70) + 'ms');
      }
      var isEmpty = !shown.length;
      empty.hidden = !isEmpty; grid.hidden = isEmpty; nav.hidden = isEmpty;
      setProgress(page === 1 ? String(end) : (start + 1) + '–' + end, end, l.length);
      var hasMore = upto < pages;
      moreWrap.hidden = !hasMore; all.hidden = hasMore;
      // Page numbers.
      $$('.bcollectiongrid49__pgli', pagesOl).forEach(function (li) { li.remove(); });
      for (var n = 1; n <= pages; n++) {
        var li = document.createElement('li'); li.className = 'bcollectiongrid49__pgli';
        var b = document.createElement('button'); b.type = 'button'; b.className = 'bcollectiongrid49__pg'; b.textContent = n; b.dataset.pg = n;
        b.setAttribute('aria-label', (root.dataset.lPage || 'Page [n]').replace('[n]', n));
        if (n >= page && n <= upto) b.setAttribute('aria-current', 'page');
        li.appendChild(b); pagesOl.insertBefore(li, nextLi);
      }
      $('[data-prev]').disabled = page === 1;
      $('[data-next]').disabled = upto >= pages;
      root.__pages = pages;
      if (anim) replay(batchFrom > 0 ? shown.slice(batchFrom) : shown.concat(tile && !tile.hidden ? [tile] : []));
    }
    function go(n) {
      page = n; upto = n; render(0, true);
      var sec = root.querySelector('section'); if (sec) sec.scrollIntoView({ behavior: (R && R.on) ? 'smooth' : 'auto', block: 'start' });
    }
    pagesOl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || b.disabled) return;
      if (b.dataset.pg) go(+b.dataset.pg);
      else if (b.hasAttribute('data-prev')) go(page - 1);
      else if (b.hasAttribute('data-next')) go(upto + 1);
    });
    if (more) more.addEventListener('click', function () {
      var from = list().slice((page - 1) * PER, upto * PER).length;
      upto = Math.min(root.__pages || 1, upto + 1); render(from, true);
    });
    addEventListener('roast:collection', function (e) {
      var d = e.detail; if (!d) return;
      var changed = JSON.stringify([d.roast, d.process, d.origins, d.min, d.max, d.sort]) !== JSON.stringify([f.roast, f.process, f.origins, f.min, f.max, f.sort]);
      f = { roast: d.roast, process: d.process || 'Any', origins: d.origins || [], min: d.min, max: d.max, sort: d.sort };
      setDensity(d.density);
      if (changed) { page = 1; upto = 1; render(0, true); }
    });
    render(0, false);
  }
  function boot() { document.querySelectorAll('.bcollectiongrid49').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
