/* article-30: reading progress (motion only), contents marker (built from the article's h2s on a live article), copy/share, add to bag. */
(function () {
  function init(root) {
    if (root.__blko30) return; root.__blko30 = true;
    var R = window.blkoRoast;
    var body = root.querySelector('[data-body]');
    // Contents: on a live article build it from the h2s in the body.
    var toc = root.querySelector('[data-toc]');
    if (toc && !toc.children.length && body) {
      var hs = body.querySelectorAll('[data-rte] h2');
      hs.forEach(function (h, i) {
        if (!h.id) h.id = (root.id || 'blko-a30') + '-h' + (i + 1);
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + h.id; a.className = 'barticle30__toca';
        var n = document.createElement('span'); n.className = 'barticle30__tocn'; n.textContent = String(i + 1).padStart(2, '0');
        a.appendChild(n); a.appendChild(document.createTextNode(h.textContent));
        if (i === 0) a.setAttribute('aria-current', 'location');
        li.appendChild(a); toc.appendChild(li);
      });
      if (!hs.length) { var side = toc.closest('.barticle30__side'); if (side) side.querySelector('nav').hidden = true; }
    }
    var links = toc ? Array.prototype.slice.call(toc.querySelectorAll('a')) : [];
    var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
    if (targets.length && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        var hit = entries.filter(function (e) { return e.isIntersecting; }).sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; })[0];
        if (!hit) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + hit.target.id) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
        });
      }, { rootMargin: '-20% 0px -65% 0px' });
      targets.forEach(function (t) { io.observe(t); });
    }
    // Reading progress: motion only, so static renders have no half-filled bar.
    var prog = root.querySelector('[data-prog]');
    if (prog && body && root.hasAttribute('data-progress') && R && R.on) {
      var fill = prog.firstElementChild; var raf = 0;
      prog.hidden = false;
      var update = function () {
        raf = 0;
        var r = body.getBoundingClientRect();
        var total = r.height - innerHeight * 0.6;
        var v = Math.min(1, Math.max(0, (innerHeight * 0.4 - r.top) / Math.max(1, total)));
        fill.style.transform = 'scaleX(' + v + ')';
      };
      var on = function () { if (!raf) raf = requestAnimationFrame(update); };
      update();
      addEventListener('scroll', on, { passive: true });
      addEventListener('resize', on);
    }
    // Copy link / share.
    root.querySelectorAll('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () { copy(b); });
    });
    function copy(b) {
      if (navigator.clipboard) navigator.clipboard.writeText(location.href).catch(function () {});
      root.querySelectorAll('[data-copy]').forEach(function (x) {
        x.setAttribute('aria-label', x.dataset.lCopied);
        x.querySelector('[data-ico-link]').hidden = true; x.querySelector('[data-ico-check]').hidden = false;
        clearTimeout(x.__t);
        x.__t = setTimeout(function () {
          x.setAttribute('aria-label', x.dataset.lCopy);
          x.querySelector('[data-ico-link]').hidden = false; x.querySelector('[data-ico-check]').hidden = true;
        }, 1800);
      });
    }
    root.querySelectorAll('[data-share]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (navigator.share) navigator.share({ title: b.dataset.title, url: location.href }).catch(function () {});
        else { var c = root.querySelector('[data-copy]'); if (c) copy(c); }
      });
    });
    // Add to bag.
    var add = root.querySelector('[data-add]');
    if (add) add.addEventListener('click', function () {
      if (add.dataset.done) return;
      var label = add.querySelector('[data-add-label]');
      var done = function () {
        add.dataset.done = '1';
        add.querySelector('[data-ico-plus]').hidden = true; add.querySelector('[data-ico-check]').hidden = false;
        if (label) label.textContent = add.dataset.lAdded;
        if (R && R.ping) R.ping(1);
      };
      var id = add.dataset.variant;
      if (!id) { done(); return; }
      add.disabled = true;
      fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart/add.js', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ items: [{ id: Number(id), quantity: 1 }] })
      }).then(function (r) { if (!r.ok) throw r; return r.json(); }).then(function () {
        add.disabled = false; done();
        document.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
      }).catch(function () { add.disabled = false; if (label) label.textContent = add.dataset.lError; });
    });
  }
  function boot() { document.querySelectorAll('.barticle30').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
