// testimonial-42: scroll word-fill. Each word of the pull quote goes from 20% to 100% opacity as the quote scrolls up
// (one progress value, per-word thresholds). Without motion it stays fully filled.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const R = window.blkoRoast, q = root.querySelector('[data-quote]');
    if (!R || !R.on || !q) return;
    const ws = [...q.querySelectorAll('[data-w]')], N = ws.length - 1;
    R.progress(q, (p) => {
      ws.forEach((w, k) => {
        const t = k < N ? (k / N) * 0.85 : 0.85;
        w.style.opacity = (0.2 + 0.8 * Math.min(1, Math.max(0, (p - t) / 0.15))).toFixed(3);
      });
    }, { start: 0.85, end: 0.15 });
  }
  const all = () => document.querySelectorAll('.btestimonial42').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
