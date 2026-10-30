// team-27: hovering, focusing or clicking a roster row picks that person and swaps the caption under the photo.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const rows = [...root.querySelectorAll('[data-person]')], cap = root.querySelector('[data-cap]');
    const n = root.querySelector('[data-n]'), who = root.querySelector('[data-who]'), note = root.querySelector('[data-note]');
    let on = 0;
    const pick = (k) => {
      if (k === on) return; on = k;
      rows.forEach((r, i) => r.setAttribute('aria-pressed', String(i === k)));
      n.textContent = String(k + 1).padStart(2, '0'); who.textContent = rows[k].dataset.pWho; note.textContent = rows[k].dataset.pNote;
      cap.classList.remove('is-in'); void cap.offsetWidth; cap.classList.add('is-in');
    };
    rows.forEach((r, k) => ['pointerenter', 'focus', 'click'].forEach((e) => r.addEventListener(e, () => pick(k))));
  }
  const all = () => document.querySelectorAll('.bteam27').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
