/* cart-page-35: live cart: options (swap the variant), subscribe switch and cadence (selling plan), stepper and Remove
   post to /cart/change.js and reload; the gift note saves to cart.note + the "Gift" attribute; a code goes through
   /discount/<code>. Preview: everything recounts in place like the DS (meter, savings, HALDEN10 takes 10%, total tween,
   lines collapse, empty state with "Restore my bag"). */
(function () {
  var root_ = function () { return (window.Shopify && Shopify.routes ? Shopify.routes.root : '/'); };
  var api = function (path, body) {
    return fetch(root_() + path, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { if (!r.ok) throw r; return r.json(); });
  };
  function init(root) {
    if (root.__blko35) return; root.__blko35 = true;
    var R = window.blkoRoast;
    var motion = !!(R && R.on);
    var d = root.dataset, live = d.mode === 'live';
    var $ = function (s) { return root.querySelector(s); };
    var $$ = function (s, el) { return Array.prototype.slice.call((el || root).querySelectorAll(s)); };
    var money = function (c, fixed) {
      var v = Math.round(c) / 100;
      var s = fixed ? v.toFixed(2) : (v % 1 ? v.toFixed(2) : String(v));
      return d.m0.replace('0', s);
    };
    var count = function (n) { return (n === 1 ? d.lItem : d.lItems).replace('[n]', n); };
    var reload = function () { window.location.reload(); };

    // Gift note (both modes): the note shows when checked, with a character count.
    var gift = $('[data-gift]'), note = $('[data-note]'), cnt = $('[data-cnt]'), timer = 0;
    var saveNote = function () {
      if (!live) return;
      clearTimeout(timer);
      timer = setTimeout(function () {
        var on = gift.querySelector('input').checked;
        api('cart/update.js', { note: on ? note.value : '', attributes: { Gift: on ? 'Yes' : '' } }).catch(function () {});
      }, 500);
    };
    if (gift) {
      gift.querySelector('input').addEventListener('change', function (e) { gift.classList.toggle('is-on', e.target.checked); saveNote(); });
      note.addEventListener('input', function () { cnt.textContent = note.value.length; saveNote(); });
    }

    if (live) {
      var line = function (el) { return el.closest('[data-line-item]'); };
      var busy = false;
      var change = function (body) { if (busy) return; busy = true; root.setAttribute('aria-busy', 'true'); api('cart/change.js', body).then(reload, reload); };
      root.addEventListener('click', function (e) {
        var b = e.target.closest('[data-dec],[data-inc],[data-rm],[data-code-rm]');
        if (!b) return;
        if (b.hasAttribute('data-code-rm')) { api('cart/update.js', { discount: '' }).then(reload, reload); return; }
        var li = line(b), q = +li.dataset.qty;
        if (b.hasAttribute('data-rm') || (b.hasAttribute('data-dec') && q <= 1)) change({ id: li.dataset.key, quantity: 0 });
        else change({ id: li.dataset.key, quantity: b.hasAttribute('data-inc') ? q + 1 : q - 1 });
      });
      $$('[data-line-item]').forEach(function (li) {
        var sw = li.querySelector('[data-subbox] input'), every = li.querySelector('[data-every]');
        var plan = function () { return sw && sw.checked ? +(every && every.value) || null : null; };
        if (sw) {
          sw.addEventListener('change', function () { li.querySelector('[data-subbox]').classList.toggle('is-on', sw.checked); change({ id: li.dataset.key, quantity: +li.dataset.qty, selling_plan: plan() }); });
          every.addEventListener('change', function () { change({ id: li.dataset.key, quantity: +li.dataset.qty, selling_plan: plan() }); });
        }
        var sels = $$('.bcartpage35__opts select', li);
        sels.forEach(function (sel) {
          sel.addEventListener('change', function () {
            var want = sels.map(function (x) { return x.value; });
            var opts = JSON.parse(li.dataset.variants || '[]'), ids = (li.dataset.ids || '').split(',');
            var i = opts.findIndex(function (o) { return o.join('|') === want.join('|'); });
            if (i < 0 || ids[i] === li.dataset.variant || busy) return;
            busy = true;
            var item = { id: +ids[i], quantity: +li.dataset.qty };
            if (plan()) item.selling_plan = plan();
            api('cart/change.js', { id: li.dataset.key, quantity: 0 })
              .then(function () { return api('cart/add.js', { items: [item] }); })
              .then(function () { if (R) R.ping(item.quantity); setTimeout(reload, 300); }, reload);
          });
        });
      });
      var form = $('[data-code-form]');
      if (form) form.addEventListener('submit', function (e) {
        e.preventDefault();
        var v = form.querySelector('[data-code]').value.trim(), err = form.querySelector('[data-code-err]');
        if (!v) { err.textContent = d.lNone; err.removeAttribute('data-off'); return; }
        window.location.href = root_() + 'discount/' + encodeURIComponent(v) + '?redirect=' + encodeURIComponent((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart');
      });
      return;
    }

    // Preview: recount in place.
    var lines = $('[data-lines]'), saved = lines.innerHTML;
    var SUB = +d.sub / 100, FREE = +d.free, FEE = +d.fee, CODE = (d.codeV || '').toUpperCase(), CODEP = +d.codePct / 100;
    var applied = false, shown = null, raf = 0;
    var tween = function (to) {
      var el = $('[data-total]');
      if (!motion || shown === null) { shown = to; el.textContent = money(to, true); return; }
      cancelAnimationFrame(raf);
      var a = shown, t0 = performance.now();
      var step = function (t) {
        var k = Math.min(1, (t - t0) / 650), n = a + (to - a) * (1 - Math.pow(1 - k, 3));
        shown = n; el.textContent = money(n, true);
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    var draw = function () {
      var rows = $$('[data-line-item]:not([data-leaving])');
      var n = 0, gross = 0, savings = 0;
      rows.forEach(function (li) {
        var q = +li.dataset.qty, unit = +(li.dataset.size === 'l' ? li.dataset.pl : li.dataset.ps), lc = unit * q;
        var on = li.querySelector('[data-subbox]').classList.contains('is-on');
        var sv = on ? Math.round(lc * SUB) : 0;
        n += q; gross += lc; savings += sv;
        li.querySelector('[data-paid]').textContent = money(lc - sv);
        li.querySelector('[data-was-v]').textContent = money(lc);
        li.querySelector('[data-was]').toggleAttribute('data-off', !on);
        var step = li.querySelector('.bcartpage35__step');
        step.classList.toggle('is-last', q <= 1);
        li.querySelector('[data-dec]').setAttribute('aria-label', q <= 1 ? li.dataset.lRm : li.dataset.lDec);
        li.querySelector('[data-inc]').disabled = q >= 12;
      });
      var sub = gross - savings, disc = applied ? Math.round(sub * CODEP) : 0;
      var ship = sub >= FREE || !rows.length ? 0 : FEE, total = sub - disc + ship;
      var left = Math.max(0, FREE - sub), pct = Math.min(100, sub / FREE * 100);
      $$('[data-count]').forEach(function (el) { el.textContent = count(n); });
      $('[data-left]').textContent = money(left);
      $('[data-left-on]').toggleAttribute('data-off', left <= 0);
      $('[data-left-done]').toggleAttribute('data-off', left > 0);
      $('[data-fill]').style.width = pct + '%';
      $('[data-knob]').style.left = pct + '%';
      $('[data-track]').setAttribute('aria-valuenow', (Math.min(sub, FREE) / 100).toFixed(2));
      $('[data-gross]').textContent = money(gross);
      $('[data-save]').textContent = money(savings);
      $('[data-save-row]').toggleAttribute('data-off', savings <= 0);
      $('[data-code-row]').toggleAttribute('data-off', !applied);
      $('[data-disc]').textContent = money(disc);
      $('[data-code-form]').toggleAttribute('data-off', applied);
      $('[data-ship]').textContent = ship ? money(ship) : d.lFree;
      $('[data-total-sr]').textContent = money(total);
      tween(total);
      root.toggleAttribute('data-is-empty', !rows.length);
    };
    var remove = function (li) {
      if (!motion) { li.remove(); draw(); return; }
      li.setAttribute('data-leaving', '');
      draw();
      setTimeout(function () { li.remove(); }, 480);
    };
    var bind = function () {
      $$('[data-line-item]').forEach(function (li) {
        var box = li.querySelector('[data-subbox]');
        box.querySelector('input').addEventListener('change', function (e) { box.classList.toggle('is-on', e.target.checked); draw(); });
        var size = li.querySelectorAll('.bcartpage35__opts select')[1];
        if (size) size.addEventListener('change', function () { li.dataset.size = size.value; draw(); });
      });
    };
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-dec],[data-inc],[data-rm],[data-code-rm],[data-restore]');
      if (!b) return;
      if (b.hasAttribute('data-restore')) { lines.innerHTML = saved; applied = false; bind(); draw(); return; }
      if (b.hasAttribute('data-code-rm')) { applied = false; draw(); return; }
      var li = b.closest('[data-line-item]'), q = +li.dataset.qty;
      if (b.hasAttribute('data-rm') || (b.hasAttribute('data-dec') && q <= 1)) { remove(li); return; }
      var up = b.hasAttribute('data-inc'), nq = up ? Math.min(12, q + 1) : q - 1;
      li.dataset.qty = nq;
      var num = li.querySelector('.bcartpage35__num'), s = document.createElement('span');
      s.setAttribute('data-num', ''); s.className = up ? 'is-up' : 'is-down'; s.textContent = nq;
      num.replaceChildren(s);
      draw();
    });
    var form = $('[data-code-form]'), input = $('[data-code]'), err = $('[data-code-err]');
    var setErr = function (msg) {
      err.textContent = msg; err.toggleAttribute('data-off', !msg);
      if (msg) { input.setAttribute('aria-invalid', 'true'); input.setAttribute('aria-describedby', err.id); }
      else { input.removeAttribute('aria-invalid'); input.removeAttribute('aria-describedby'); }
    };
    input.addEventListener('input', function () { setErr(''); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = input.value.trim().toUpperCase();
      if (v && v === CODE) { applied = true; input.value = ''; setErr(''); draw(); }
      else setErr(v ? d.lBad : d.lNone);
    });
    $('[data-checkout-form]').addEventListener('submit', function (e) { e.preventDefault(); });
    bind();
    shown = null;
    draw();
  }
  var boot = function () { document.querySelectorAll('.bcartpage35').forEach(init); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
