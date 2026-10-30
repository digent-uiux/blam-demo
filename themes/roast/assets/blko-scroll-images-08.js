// scroll-images-08: with motion at 896px+, the band grows to N screens and its stage pins (sticky); scroll position
// picks the active note (colour block, outline/solid names, copy pane, 0N counter), turns and breathes the cup and
// fills the bar; a note click scrolls to its step. Without motion: one still screen, first note, bar at a quarter.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, band = root.querySelector('[data-band]');
    if (!band) return;
    const stage = band.querySelector('[data-stage]'), cup = band.querySelector('[data-cup]'), fill = band.querySelector('[data-fill]');
    const cur = band.querySelector('[data-cur]'), btns = [...band.querySelectorAll('[data-k]')], panes = [...band.querySelectorAll('[data-pane]')];
    const N = btns.length; if (!N) return;
    band.style.setProperty('--n', N);
    let pin = false, active = 0, raf = 0;
    const setActive = (k) => {
      if (k === active) return;
      active = k;
      const pop = btns[k].dataset.pop;
      stage.dataset.pop = pop;
      btns.forEach((b, i) => { if (i === k) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
      panes.forEach((p, i) => { p.hidden = i !== k; p.classList.toggle('is-in', i === k); });
      if (cur) cur.textContent = String(k + 1).padStart(2, '0');
    };
    const update = () => {
      raf = 0;
      if (!pin) return;
      const b = band.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, -b.top / Math.max(1, b.height - innerHeight))) * (N - 1);
      setActive(Math.min(N - 1, Math.round(t)));
      if (cup) { cup.style.rotate = `${(t * 9 - 6).toFixed(2)}deg`; cup.style.scale = (1 + Math.sin(t * Math.PI) * 0.04).toFixed(3); }
      if (fill) fill.style.scale = `${(N > 1 ? t / (N - 1) : 1).toFixed(3)} 1`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    btns.forEach((b, k) => b.addEventListener('click', () => {
      if (!pin) { setActive(k); return; }
      const top = band.getBoundingClientRect().top + scrollY;
      scrollTo({ top: top + (N > 1 ? k / (N - 1) : 0) * (band.offsetHeight - innerHeight), behavior: 'smooth' });
    }));
    if (!R || !R.on) return;
    const mq = matchMedia('(min-width: 896px)');
    const sync = () => {
      pin = mq.matches; band.toggleAttribute('data-pin', pin);
      if (!pin) { setActive(0); if (cup) cup.style.rotate = cup.style.scale = ''; if (fill) fill.style.scale = ''; }
      update();
    };
    mq.addEventListener('change', sync); sync();
    addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
  }
  const all = () => document.querySelectorAll('.bscrollimages08').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
