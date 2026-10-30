// marquee-gsap-05: plain-JS port of the DS GSAP loop. The track runs one half (-50%) per --speed seconds; scroll
// velocity boosts the rate (up to 7x) and scroll direction sets the direction, easing back to the base drift; hover or
// focus eases it to a stop. Without motion (static, reduced motion) the row stays still at the first origin.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, strip = root.querySelector('[data-strip]'), track = root.querySelector('[data-track]');
    if (!R || !R.on || !track) return;
    const dur = parseFloat(getComputedStyle(root).getPropertyValue('--speed')) || 60;
    let x = 0.5, rate = 1, target = 1, dir = 1, held = false, boostUntil = 0, lastY = scrollY, lastT = performance.now(), prev = performance.now();
    let visible = true;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(root);
    addEventListener('scroll', () => {
      const now = performance.now(), y = scrollY, dy = y - lastY, dt = Math.max(16, now - lastT);
      lastY = y; lastT = now;
      if (held || !dy) return;
      dir = dy > 0 ? 1 : -1;
      const v = Math.abs(dy) / dt * 1000; // px/s
      target = dir * (1 + Math.min(v / 250, 6));
      boostUntil = now + 250;
    }, { passive: true });
    const stop = () => { held = true; target = 0; };
    const go = () => { held = false; target = dir; };
    strip.addEventListener('pointerenter', stop); strip.addEventListener('pointerleave', go);
    strip.addEventListener('focusin', stop); strip.addEventListener('focusout', go);
    const tick = (now) => {
      const dt = Math.min(0.1, (now - prev) / 1000); prev = now;
      if (!held && now > boostUntil) target = dir;
      const k = held ? 3 : (now > boostUntil ? 1.8 : 10);
      rate += (target - rate) * Math.min(1, dt * k);
      x = (x + rate * dt / dur) % 1; if (x < 0) x += 1;
      if (visible) track.style.transform = `translate3d(${(-x * 50).toFixed(3)}%,0,0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const all = () => document.querySelectorAll('.bmarqueegsap05').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
