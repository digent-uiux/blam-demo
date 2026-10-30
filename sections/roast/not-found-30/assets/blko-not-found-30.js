// not-found-30: with motion and a fine pointer, the beans scatter away from the pointer over the stage (pushed by
// distance and spun) and drift back when it leaves. Static / touch: they lie still.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const box = root.querySelector('[data-stage]'), els = [...root.querySelectorAll('[data-bean]')];
    if (!box || !(window.blkoRoast && window.blkoRoast.on) || !matchMedia('(pointer: fine)').matches) return;
    let raf = 0, pt = null;
    const apply = () => {
      raf = 0;
      const b = box.getBoundingClientRect();
      els.forEach((el, i) => {
        if (!pt) { el.style.transform = ''; return; }
        const cx = b.left + (+el.dataset.x / 100) * b.width, cy = b.top + (+el.dataset.y / 100) * b.height;
        const dx = cx - pt.x, dy = cy - pt.y, dist = Math.hypot(dx, dy) || 1, f = Math.max(0, 1 - dist / 320), push = f * 120;
        el.style.transform = `translate(${((dx / dist) * push).toFixed(1)}px, ${((dy / dist) * push).toFixed(1)}px) rotate(${(f * 160 * (i % 2 ? 1 : -1)).toFixed(0)}deg)`;
      });
    };
    box.addEventListener('pointermove', (e) => { pt = { x: e.clientX, y: e.clientY }; if (!raf) raf = requestAnimationFrame(apply); });
    box.addEventListener('pointerleave', () => { pt = null; if (!raf) raf = requestAnimationFrame(apply); });
  }
  const all = () => document.querySelectorAll('.bnotfound30').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
