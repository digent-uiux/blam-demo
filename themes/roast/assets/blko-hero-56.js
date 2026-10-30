// hero-56: with motion, the photo zooms (1 -> 1.12) and the headline lines drift apart (0 -> 90px) over the first
// screen of scroll, and a spotlight follows a fine pointer. The tasting card's button adds the product to the cart
// (/cart/add.js) and pings the header bag. Static / reduced motion: settled stage, no drift, no spotlight.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, stage = root.querySelector('[data-stage]');
    const add = root.querySelector('[data-add]'), live = root.querySelector('[data-live]');
    if (add) add.addEventListener('click', async () => {
      const id = add.dataset.add;
      const done = () => {
        add.classList.add('is-added'); if (live) live.textContent = add.dataset.addedLabel;
        if (R && R.ping) R.ping(1);
        setTimeout(() => { add.classList.remove('is-added'); if (live) live.textContent = ''; }, 1600);
      };
      if (!id) { done(); return; }
      add.setAttribute('aria-busy', 'true');
      try {
        const r = await fetch((window.Shopify && Shopify.routes && Shopify.routes.root || '/') + 'cart/add.js', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ items: [{ id: +id, quantity: 1 }] })
        });
        if (!r.ok) throw new Error(r.status);
        done();
      } catch (e) { if (live) live.textContent = add.dataset.errorLabel; }
      add.removeAttribute('aria-busy');
    });
    if (!R || !R.on || !stage) return;
    const photo = stage.querySelector('[data-photo]'), l1 = stage.querySelector('[data-l1]'), l2 = stage.querySelector('[data-l2]');
    let raf = 0;
    const update = () => {
      raf = 0;
      const d = Math.min(1, Math.max(0, scrollY / innerHeight));
      if (photo) photo.style.transform = d > 0 ? `scale(${(1 + d * 0.12).toFixed(3)})` : '';
      const a = (d * 90).toFixed(1);
      if (l1) l1.style.translate = d > 0 ? `-${a}px 0` : '';
      if (l2) l2.style.translate = d > 0 ? `${a}px 0` : '';
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    update();
    if (matchMedia('(pointer: fine)').matches) {
      stage.addEventListener('pointermove', (e) => {
        const b = stage.getBoundingClientRect();
        stage.style.setProperty('--mx', `${e.clientX - b.left}px`);
        stage.style.setProperty('--my', `${e.clientY - b.top}px`);
        stage.dataset.lit = '';
      });
      stage.addEventListener('pointerleave', () => { delete stage.dataset.lit; });
    }
  }
  const all = () => document.querySelectorAll('.bhero56').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
