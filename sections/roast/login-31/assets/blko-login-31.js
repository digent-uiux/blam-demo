// login-31: the Sign in / Create account toggle slides its pill and swaps the two forms (and the heading); the eye
// buttons show / hide their password; on submit the live line says what is happening (the forms post to Shopify).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const tabs = [...root.querySelectorAll('[data-mode]')], toggle = root.querySelector('.blogin31__toggle');
    const panes = { in: root.querySelector('[data-pane="in"]'), up: root.querySelector('[data-pane="up"]') };
    const hIn = root.querySelector('[data-h-in]'), hUp = root.querySelector('[data-h-up]'), live = root.querySelector('[data-live]');
    const set = (m) => {
      tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.mode === m)));
      if (toggle) toggle.classList.toggle('is-up', m === 'up');
      Object.entries(panes).forEach(([k, p]) => {
        if (!p) return;
        const off = k !== m, form = p.closest('form');
        form.classList.toggle('is-off', off); form.inert = off; p.setAttribute('aria-hidden', String(off));
      });
      hIn.hidden = m === 'up'; hUp.hidden = m !== 'up';
      live.textContent = '';
    };
    tabs.forEach((t) => t.addEventListener('click', () => set(t.dataset.mode)));
    if (panes.up) { const f = panes.up.closest('form'); f.inert = true; panes.up.setAttribute('aria-hidden', 'true'); }
    root.querySelectorAll('[data-eye]').forEach((b) => b.addEventListener('click', () => {
      const input = b.parentElement.querySelector('input'), show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      b.setAttribute('aria-pressed', String(show)); b.setAttribute('aria-label', show ? b.dataset.hide : b.dataset.show);
      b.querySelector('[data-eye-on]').hidden = show; b.querySelector('[data-eye-off]').hidden = !show;
    }));
    Object.entries(panes).forEach(([k, p]) => { if (p) p.closest('form').addEventListener('submit', () => { live.textContent = live.dataset[k]; }); });
  }
  const all = () => document.querySelectorAll('.blogin31').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
