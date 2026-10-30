/* blog-94: Load more. On a blog page it fetches the next page and appends its stories as ruled rows; without a blog it reveals the preset rows. */
(function () {
  function init(root) {
    if (root.__blko94) return; root.__blko94 = true;
    var btn = root.querySelector('[data-more]');
    var rows = root.querySelector('[data-rows]');
    var tpl = root.querySelector('template[data-row-tpl]');
    var showing = root.querySelector('[data-showing]');
    var fill = root.querySelector('[data-fill]');
    var label = root.querySelector('[data-more-label]');
    if (!btn || !rows) return;
    var total = parseInt(root.dataset.total, 10) || 0;
    var shown = parseInt(root.dataset.count, 10) || 0;
    var next = root.dataset.next || '';
    function setCount(n, done) {
      shown = n;
      if (showing) showing.textContent = (root.dataset.lShowing || 'Showing [shown] of [total]').replace('[shown]', n).replace('[total]', total);
      if (fill && total) fill.style.width = Math.min(100, n / total * 100) + '%';
      if (done) { btn.disabled = true; if (label) label.textContent = root.dataset.lDone || 'All caught up for now'; }
    }
    function reveal() {
      rows.hidden = false;
      var g = rows.closest('[data-reveal-group]');
      rows.querySelectorAll('.rm-rise').forEach(function (li) { li.setAttribute('data-shown', ''); });
      if (g) g.setAttribute('data-shown', '');
    }
    btn.addEventListener('click', function () {
      if (btn.disabled) return;
      if (!next) {
        reveal();
        setCount(parseInt(root.dataset.moreShown, 10) || shown + rows.children.length, true);
        return;
      }
      btn.disabled = true;
      fetch(next).then(function (r) { return r.text(); }).then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var other = doc.querySelector('.bblog94');
        var src = other || doc;
        var stories = src.querySelectorAll('[data-story]');
        stories.forEach(function (a, i) {
          if (!tpl) return;
          var li = tpl.content.firstElementChild.cloneNode(true);
          li.style.setProperty('--d', (i * 90) + 'ms');
          li.querySelector('a').setAttribute('href', a.getAttribute('href'));
          li.querySelector('[data-r-meta]').textContent = a.dataset.cat + ' · ' + a.dataset.read;
          li.querySelector('[data-r-title]').textContent = a.dataset.title;
          rows.appendChild(li);
        });
        var nextRoot = other && other.dataset ? other.dataset.next : '';
        next = nextRoot || '';
        reveal();
        btn.disabled = false;
        setCount(shown + stories.length, !next);
      }).catch(function () { btn.disabled = false; });
    });
  }
  function boot() { document.querySelectorAll('.bblog94').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  document.addEventListener('shopify:section:load', boot);
})();
