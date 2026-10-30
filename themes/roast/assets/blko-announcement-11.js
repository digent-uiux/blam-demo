// announcement-11: roll the messages every few seconds (motion only), prev / next buttons, pause on hover or focus.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const msgs = [...root.querySelectorAll('[data-msg]')], bar = root.querySelector('[data-bar]');
    const timer = root.querySelector('[data-timer]'), fill = timer && timer.firstElementChild;
    const ms = parseInt(root.dataset.ms, 10) || 4500, n = msgs.length;
    const run = !!(window.blkoRoast && window.blkoRoast.on) && n > 1;
    let i = 0, t = 0, paused = false;
    const show = (k) => {
      i = (k + n) % n;
      msgs.forEach((m, j) => {
        const on = j === i, above = j === (i + n - 1) % n;
        m.classList.toggle('is-on', on); m.classList.toggle('is-above', !on && above); m.classList.toggle('is-below', !on && !above);
        if (on) { m.removeAttribute('tabindex'); m.removeAttribute('aria-hidden'); } else { m.setAttribute('tabindex', '-1'); m.setAttribute('aria-hidden', 'true'); }
      });
      if (run) restart();
    };
    const restart = () => {
      clearTimeout(t);
      if (fill) { fill.style.animation = 'none'; void fill.offsetWidth; fill.style.animation = `bannouncement11-fill ${ms}ms linear both`; fill.style.animationPlayState = paused ? 'paused' : 'running'; }
      if (!paused) t = setTimeout(() => show(i + 1), ms);
    };
    root.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => show(i + parseInt(b.dataset.go, 10))));
    if (!run) return;
    if (timer) timer.hidden = false;
    const pause = (p) => { paused = p; if (p) { clearTimeout(t); if (fill) fill.style.animationPlayState = 'paused'; } else restart(); };
    bar.addEventListener('pointerenter', () => pause(true)); bar.addEventListener('pointerleave', () => pause(false));
    bar.addEventListener('focusin', () => pause(true)); bar.addEventListener('focusout', () => pause(false));
    restart();
  }
  const all = () => document.querySelectorAll('.bannouncement11').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
