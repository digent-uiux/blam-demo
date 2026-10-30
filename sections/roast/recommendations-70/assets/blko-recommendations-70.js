// recommendations-70: drag rail (mouse drag, arrow keys, prev / next, progress line) and one-tap adds that post the
// variant to /cart/add.js, morph plus to check for 2 s and ping the header bag. Loads complementary recommendations
// into the rail when the section was rendered without them.
(() => {
  function bind(root) {
    const rail = root.querySelector('[data-rail]'), bar = root.querySelector('[data-bar]');
    if (!rail) return;
    const prev = root.querySelector('[data-go="-1"]'), next = root.querySelector('[data-go="1"]');
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      if (bar) bar.style.transform = `scaleX(${Math.max(0.15, max > 0 ? rail.scrollLeft / max : 1)})`;
      if (prev) prev.disabled = rail.scrollLeft <= 2;
      if (next) next.disabled = rail.scrollLeft >= max - 2;
    };
    const step = (dir) => {
      const card = rail.querySelector('li');
      if (!card) return;
      rail.scrollBy({ left: dir * (card.clientWidth + 16), behavior: window.blkoRoast && window.blkoRoast.on ? 'smooth' : 'auto' });
    };
    if (prev) prev.onclick = () => step(-1);
    if (next) next.onclick = () => step(1);
    rail.onscroll = update;
    rail.onkeydown = (e) => {
      if (e.target !== rail) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    };
    let drag = null;
    rail.onpointerdown = (e) => {
      if (e.pointerType !== 'mouse' || e.target.closest('button, a')) return;
      drag = { x: e.clientX, left: rail.scrollLeft }; rail.setPointerCapture(e.pointerId); rail.classList.add('is-drag');
    };
    rail.onpointermove = (e) => { if (drag) rail.scrollLeft = drag.left - (e.clientX - drag.x); };
    rail.onpointerup = rail.onpointercancel = (e) => { if (!drag) return; drag = null; rail.releasePointerCapture(e.pointerId); rail.classList.remove('is-drag'); };
    rail.querySelectorAll('[data-add]').forEach((b) => b.addEventListener('click', () => {
      const live = b.closest('li').querySelector('[data-live]'), t = b.dataset.title;
      const on = () => {
        if (window.blkoRoast) window.blkoRoast.ping(1);
        b.classList.add('is-on'); b.setAttribute('aria-label', root.dataset.lAdded.replace('[title]', t));
        if (live) live.textContent = root.dataset.lAdded.replace('[title]', t);
        clearTimeout(b._t);
        b._t = setTimeout(() => { b.classList.remove('is-on'); b.setAttribute('aria-label', root.dataset.lAdd.replace('[title]', t)); if (live) live.textContent = ''; }, 2000);
      };
      if (!b.dataset.variant) { on(); return; }
      fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : '/') + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [{ id: +b.dataset.variant, quantity: 1 }] }) })
        .then((r) => { if (r.ok) on(); }).catch(() => {});
    }));
    addEventListener('resize', update);
    update();
  }
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    bind(root);
    if (root.dataset.recs) fetch(root.dataset.recs).then((r) => r.text()).then((html) => {
      const fresh = new DOMParser().parseFromString(html, 'text/html').querySelector('.brecommendations70 [data-rail]');
      const rail = root.querySelector('[data-rail]');
      if (fresh && fresh.children.length && rail) { rail.innerHTML = fresh.innerHTML; rail.scrollLeft = 0; bind(root); }
    }).catch(() => {});
  }
  const all = () => document.querySelectorAll('.brecommendations70').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
