// horizontal-scroll-05: with motion from 896px wide, the band gets the height of the sideways distance + 900px, the
// stage pins, and vertical scroll moves the track left; photos ease back from a zoom near the middle, the year scale
// fills and lights the active year. Without motion (static, reduced, narrow) it stays a scroll-snap rail.
(() => {
  const clamp = (v) => Math.min(1, Math.max(0, v));
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const band = root.querySelector('[data-band]'), track = root.querySelector('[data-track]'), fill = root.querySelector('[data-fill]');
    const chs = [...root.querySelectorAll('[data-ch]')], yrs = [...root.querySelectorAll('[data-yr]')], cue = root.querySelector('[data-cue]');
    const swipe = cue.textContent;
    if (!(window.blkoRoast && window.blkoRoast.on)) return;
    const mq = matchMedia('(min-width: 896px)');
    let dist = 0, raf = 0;
    const update = () => {
      raf = 0;
      if (!band.classList.contains('is-pinned')) return;
      const b = band.getBoundingClientRect(), p = clamp(-b.top / Math.max(1, b.height - innerHeight));
      track.style.translate = `${(-p * dist).toFixed(1)}px 0`;
      fill.style.scale = `${p.toFixed(3)} 1`;
      chs.forEach((c, k) => {
        const local = clamp(1 - Math.abs(p * (chs.length + 0.6) - (k + 1)) / 1.4), img = c.querySelector('.bhorizontalscroll05__img');
        if (img) img.style.scale = (1.12 - 0.12 * local).toFixed(3);
      });
      const active = Math.min(chs.length - 1, Math.max(0, Math.round(p * chs.length - 0.35)));
      yrs.forEach((y, k) => y.classList.toggle('is-on', k === active));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    const sync = () => {
      const pin = mq.matches;
      band.classList.toggle('is-pinned', pin);
      cue.textContent = pin ? cue.dataset.keep : swipe;
      if (pin) { dist = Math.max(0, track.scrollWidth - innerWidth); band.style.height = `${Math.round(dist + 900)}px`; update(); }
      else { band.style.height = ''; track.style.translate = ''; fill.style.scale = ''; chs.forEach((c) => { const i = c.querySelector('.bhorizontalscroll05__img'); if (i) i.style.scale = ''; }); }
    };
    sync();
    mq.addEventListener('change', sync);
    addEventListener('scroll', on, { passive: true });
    addEventListener('resize', () => { sync(); on(); });
  }
  const all = () => document.querySelectorAll('.bhorizontalscroll05').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
