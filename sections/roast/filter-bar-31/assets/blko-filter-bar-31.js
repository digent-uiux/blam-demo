/* filter-bar-31: roast scale, process, origin and price popovers, sort, density, chips and the phone sheet.
   On a collection page every change rebuilds the URL with Shopify's storefront filter params and sort_by and loads
   it (the sheet waits for "Show"); density is sent to the grid as the "roast:collection" window event.
   Without a collection it filters the sample catalog and sends "roast:collection" (filters, sort, density) like the
   DS; "roast:collection-reset" from the grid clears it. */
(function () {
  function init(root) {
    if (root.__blko31) return; root.__blko31 = true;
    var R = window.blkoRoast;
    var live = root.dataset.mode === 'live';
    var $$ = function (s, el) { return Array.prototype.slice.call((el || root).querySelectorAll(s)); };
    var priceFs = root.querySelector('[data-lo]');
    var LO = priceFs ? +priceFs.dataset.lo : 0, HI = priceFs ? +priceFs.dataset.hi : 0;
    var cur = root.dataset.cur || '$';
    var catalog = (root.dataset.catalogNl || '').split(/<br\s*\/?>/).map(function (l) {
      var p = l.split('|').map(function (x) { return x.trim(); });
      return p.length >= 4 && p[0] ? { o: p[0], p: p[1], r: +p[2], price: +p[3] } : null;
    }).filter(Boolean);
    var steps = $$('[data-seg-roast]')[0] ? $$('[data-roast]', $$('[data-seg-roast]')[0]) : [];
    var names = steps.map(function (b) { return b.dataset.name; });
    // State, read from the first copy of each control (live: the server marked the active values).
    var first = function (s) { return root.querySelector(s); };
    var pressed = steps.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; })[0];
    var minIn = first('input[data-k="min"]'), maxIn = first('input[data-k="max"]');
    var START = { roast: null, process: '', origins: [], min: LO, max: HI };
    var f = {
      roast: pressed ? +pressed.dataset.roast : null,
      process: first('.bfilterbar31__procsel') ? first('.bfilterbar31__procsel').value : '',
      origins: $$('.bfilterbar31__desk .bfilterbar31__ocheck input:checked').map(function (i) { return i.value; }),
      min: minIn ? +minIn.value : LO, max: maxIn ? +maxIn.value : HI,
      sort: first('.bfilterbar31__sortsel') ? first('.bfilterbar31__sortsel').value : '',
      density: 4
    };
    var lastCount = null;
    function count() {
      if (live) return +(first('[data-count]') || {}).textContent || 0;
      return catalog.filter(function (x) {
        return (f.roast === null || f.roast === x.r) && (!f.process || f.process === x.p) && (!f.origins.length || f.origins.indexOf(x.o) > -1) && x.price >= f.min && x.price <= f.max;
      }).length;
    }
    function chips() {
      var c = [];
      if (f.roast !== null) c.push({ id: 'roast', label: names[f.roast - 1] + ' ' + root.dataset.lRoast, clear: function () { f.roast = null; } });
      if (f.process) c.push({ id: 'process', label: f.process, clear: function () { f.process = ''; } });
      f.origins.forEach(function (o) { c.push({ id: 'o-' + o, label: o, clear: function () { f.origins = f.origins.filter(function (y) { return y !== o; }); } }); });
      if (f.min !== LO || f.max !== HI) c.push({ id: 'price', label: cur + f.min + ' ' + root.dataset.lTo + ' ' + cur + f.max, clear: function () { f.min = LO; f.max = HI; } });
      return c;
    }
    function paint() {
      $$('[data-seg-roast]').forEach(function (seg) {
        var ind = seg.querySelector('[data-ind]');
        ind.classList.toggle('is-off', f.roast === null);
        ind.style.translate = ((f.roast || 1) - 1) * 100 + '% 0';
        $$('[data-roast]', seg).forEach(function (b) { b.setAttribute('aria-pressed', +b.dataset.roast === f.roast ? 'true' : 'false'); });
      });
      $$('[data-rname]').forEach(function (s) { s.textContent = f.roast ? names[f.roast - 1] : root.dataset.lHint; });
      $$('.bfilterbar31__procsel').forEach(function (s) { s.value = f.process; });
      $$('.bfilterbar31__sortsel').forEach(function (s) { if (f.sort) s.value = f.sort; });
      $$('.bfilterbar31__ocheck input').forEach(function (i) { i.checked = f.origins.indexOf(i.value) > -1; });
      $$('input[data-k]').forEach(function (i) { i.value = f[i.dataset.k]; });
      $$('[data-out]').forEach(function (o) { o.textContent = cur + f[o.dataset.out]; });
      var bo = f.origins.length, bp = f.min !== LO || f.max !== HI ? 1 : 0;
      $$('[data-badge]').forEach(function (b) {
        var k = b.dataset.badge, n = k === 'origins' ? bo : k === 'price' ? bp : chips().length;
        b.textContent = n; b.hidden = !n;
        var btn = b.closest('[data-pop-btn]'); if (btn) btn.classList.toggle('has-badge', !!n);
      });
      $$('[data-seg-dens]').forEach(function (seg) {
        seg.querySelector('[data-ind]').style.translate = (f.density - 2) * 100 + '% 0';
        $$('[data-dens]', seg).forEach(function (b) { b.setAttribute('aria-pressed', +b.dataset.dens === f.density ? 'true' : 'false'); });
      });
      var n = count();
      var word = n === 1 ? root.dataset.lOne : root.dataset.lMany;
      $$('[data-count]').forEach(function (s) {
        if (lastCount !== null && lastCount !== n) { s.classList.remove('is-roll'); void s.offsetWidth; s.classList.add('is-roll'); }
        s.textContent = n;
      });
      lastCount = n;
      $$('[data-count-word]').forEach(function (s) { s.textContent = word; });
      $$('[data-show]').forEach(function (s) { s.textContent = root.dataset.lShow.replace('[n]', n).replace('[word]', word); });
      if (!live) paintChips();
    }
    var list = root.querySelector('[data-chips]'), tpl = root.querySelector('template[data-chip-tpl]'), clearLi = list && list.querySelector('.bfilterbar31__clearli');
    function paintChips() {
      if (!list || !tpl) return;
      var c = chips(), have = {};
      $$('.bfilterbar31__chip', list).forEach(function (li) { have[li.dataset.id] = li; });
      c.forEach(function (x) {
        if (have[x.id]) { have[x.id].querySelector('[data-chip-label]').textContent = x.label; delete have[x.id]; return; }
        var li = tpl.content.firstElementChild.cloneNode(true);
        li.dataset.id = x.id;
        li.querySelector('[data-chip-label]').textContent = x.label;
        var btn = li.querySelector('[data-chip-x]');
        btn.setAttribute('aria-label', root.dataset.lRemove.replace('[label]', x.label));
        btn.addEventListener('click', function () {
          var now = chips().filter(function (y) { return y.id === x.id; })[0];
          if (!now) return;
          if (!(R && R.on)) { now.clear(); commit(); return; }
          li.setAttribute('data-leaving', '');
          setTimeout(function () { now.clear(); commit(); }, 220);
        });
        list.insertBefore(li, clearLi);
      });
      Object.keys(have).forEach(function (k) { have[k].remove(); });
      list.hidden = !c.length;
    }
    function emit() {
      dispatchEvent(new CustomEvent('roast:collection', { detail: { roast: f.roast, process: f.process || 'Any', origins: f.origins.slice(), min: f.min, max: f.max, sort: f.sort, density: f.density } }));
    }
    function go() {
      var base = root.dataset.base || location.pathname;
      var q = new URLSearchParams();
      var step = steps[f.roast - 1];
      if (step && step.dataset.param) q.append(step.dataset.param, step.dataset.value);
      var sel = first('.bfilterbar31__procsel');
      if (f.process && sel) { var opt = sel.querySelector('option[value="' + CSS.escape(f.process) + '"]'); if (opt && opt.dataset.param) q.append(opt.dataset.param, f.process); }
      $$('.bfilterbar31__desk .bfilterbar31__ocheck input').forEach(function (i) { if (f.origins.indexOf(i.value) > -1 && i.name) q.append(i.name, i.value); });
      if (f.min !== LO && minIn && minIn.dataset.param) q.append(minIn.dataset.param, f.min);
      if (f.max !== HI && maxIn && maxIn.dataset.param) q.append(maxIn.dataset.param, f.max);
      if (f.sort) q.append('sort_by', f.sort);
      location.href = base + (q.toString() ? '?' + q.toString() : '');
    }
    var sheet = root.querySelector('[data-sheet]');
    function commit(fromSheet) {
      paint();
      if (!live) { emit(); return; }
      if (fromSheet && sheet && sheet.hasAttribute('data-open')) return; // the sheet applies on "Show"
      go();
    }
    // Wiring (every copy of each control).
    $$('[data-roast]').forEach(function (b) {
      b.addEventListener('click', function () { var r = +b.dataset.roast; f.roast = f.roast === r ? null : r; commit(!!b.closest('[data-sheet]')); });
    });
    $$('.bfilterbar31__procsel').forEach(function (s) { s.addEventListener('change', function () { f.process = s.value; commit(!!s.closest('[data-sheet]')); }); });
    $$('.bfilterbar31__sortsel').forEach(function (s) { s.addEventListener('change', function () { f.sort = s.value; commit(!!s.closest('[data-sheet]')); }); });
    $$('.bfilterbar31__ocheck input').forEach(function (i) {
      i.addEventListener('change', function () {
        f.origins = f.origins.filter(function (y) { return y !== i.value; });
        if (i.checked) f.origins.push(i.value);
        commit(true); // live: popover changes apply on Done / close
      });
    });
    $$('input[data-k]').forEach(function (i) {
      i.addEventListener('input', function () {
        var v = +i.value;
        if (i.dataset.k === 'min') f.min = Math.min(v, f.max); else f.max = Math.max(v, f.min);
        paint();
        if (!live) { emit(); return; }
      });
    });
    $$('[data-dens]').forEach(function (b) { b.addEventListener('click', function () { f.density = +b.dataset.dens; paint(); emit(); }); });
    $$('[data-clear]').forEach(function (b) {
      b.addEventListener('click', function () { f.roast = START.roast; f.process = ''; f.origins = []; f.min = LO; f.max = HI; commit(!!b.closest('[data-sheet]')); });
    });
    addEventListener('roast:collection-reset', function () {
      if (live) { location.href = root.dataset.base || location.pathname; return; }
      f.roast = null; f.process = ''; f.origins = []; f.min = LO; f.max = HI; paint(); emit();
    });
    // Popovers: Escape and outside click close; live filters apply when one closes with changes.
    var snap = function () { return JSON.stringify([f.origins.slice().sort(), f.min, f.max]); };
    $$('[data-pop]').forEach(function (box) {
      var btn = box.querySelector('[data-pop-btn]'), panel = box.querySelector('[data-pop-panel]'), before = '';
      var close = function (focus) {
        if (panel.hidden) return;
        panel.hidden = true; btn.setAttribute('aria-expanded', 'false');
        if (focus) btn.focus();
        if (live && snap() !== before) go();
      };
      btn.addEventListener('click', function () {
        if (!panel.hidden) { close(); return; }
        $$('[data-pop-panel]').forEach(function (p) { if (p !== panel && !p.hidden) p.closest('[data-pop]').querySelector('[data-pop-btn]').click(); });
        before = snap(); panel.hidden = false; btn.setAttribute('aria-expanded', 'true');
      });
      box.querySelector('[data-pop-done]').addEventListener('click', function () { close(true); });
      document.addEventListener('pointerdown', function (e) { if (!box.contains(e.target)) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(true); });
    });
    // Phone sheet.
    var opener = root.querySelector('[data-sheet-open]'), prevOverflow = '';
    function openSheet() {
      if (!sheet) return;
      sheet.setAttribute('data-open', ''); opener.setAttribute('aria-expanded', 'true');
      prevOverflow = document.documentElement.style.overflow; document.documentElement.style.overflow = 'hidden';
      var x = sheet.querySelector('[data-sheet-x]'); if (x) x.focus();
    }
    function closeSheet(apply) {
      if (!sheet || !sheet.hasAttribute('data-open')) return;
      sheet.removeAttribute('data-open'); opener.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = prevOverflow; opener.focus();
      if (live && apply) go();
    }
    if (opener) opener.addEventListener('click', openSheet);
    $$('[data-sheet-close]').forEach(function (b) { b.addEventListener('click', function () { closeSheet(false); }); });
    var show = root.querySelector('[data-sheet-show]'); if (show) show.addEventListener('click', function () { closeSheet(true); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(false); });
    // Sticky on desktop: the theme's section wrapper is the sticky box.
    if (root.dataset.sticky === 'true') {
      var wrap = root.closest('.shopify-section') || root;
      var mq = matchMedia('(min-width: 1024px)');
      var stick = function () { wrap.style.position = mq.matches ? 'sticky' : ''; wrap.style.top = mq.matches ? '0' : ''; wrap.style.zIndex = mq.matches ? '30' : ''; };
      stick(); if (mq.addEventListener) mq.addEventListener('change', stick);
    }
    paint();
    if (!live) emit();
  }
  function boot() { document.querySelectorAll('.bfilterbar31').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
