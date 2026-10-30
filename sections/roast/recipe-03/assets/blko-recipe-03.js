// recipe-03: brewer tabs (sliding pill, arrow keys), spec + steps swap, and a sped-up brew timer (ring, readout, the
// step under way lit in the list). Static: the first brewer, the ring full, nothing running.
(() => {
  const C = 2 * Math.PI * 54;
  const clock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const d = root.dataset, tick = parseInt(d.tick, 10) || 50;
    const tabsBox = root.querySelector('[data-tabs]'), pill = root.querySelector('[data-pill]');
    const tabs = [...root.querySelectorAll('[data-tab]')], specs = [...root.querySelectorAll('[data-spec]')], lists = [...root.querySelectorAll('[data-steps]')];
    const panel = root.querySelector('[data-panel]'), tags = root.querySelectorAll('[data-tag]:not(dl)');
    const timers = [...root.querySelectorAll('[data-timer]')];
    if (!tabs.length || !specs.length) return;
    let b = 0, total = 0, left = 0, running = false, iv = 0;
    const measure = () => {
      const t = tabs[b];
      if (!pill || !t) return;
      pill.style.left = t.offsetLeft + 'px'; pill.style.width = t.offsetWidth + 'px';
    };
    const render = () => {
      const steps = [...lists[b].querySelectorAll('[data-at]')];
      const elapsed = total - left, done = left === 0;
      let cur = 0;
      steps.forEach((s, i) => { if (elapsed >= parseInt(s.dataset.at, 10)) cur = i; });
      steps.forEach((s, i) => {
        const now = i === cur && (running || elapsed > 0) && !done, past = elapsed > 0 && (i < cur || done);
        s.classList.toggle('is-now', now); s.classList.toggle('is-past', past);
        if (now) s.setAttribute('aria-current', 'step'); else s.removeAttribute('aria-current');
      });
      timers.forEach((t) => {
        t.querySelector('[data-tname]').textContent = specs[b].dataset.name;
        t.querySelector('[data-clock]').textContent = clock(left);
        t.querySelector('[data-stepno]').textContent = done ? d.lEnjoy : `${d.lStep} ${cur + 1} / ${steps.length}`;
        t.querySelector('[data-arc]').setAttribute('stroke-dashoffset', (C * (1 - left / total)).toFixed(2));
        const btn = t.querySelector('[data-toggle]');
        btn.querySelector('[data-ico-play]').hidden = running; btn.querySelector('[data-ico-pause]').hidden = !running;
        btn.querySelector('[data-btn-label]').textContent = running ? d.lPause : done ? d.lAgain : elapsed ? d.lResume : d.lStart;
        btn.setAttribute('aria-label', running ? d.aPause : done ? d.aRestart : d.aStart);
      });
    };
    const stop = () => { running = false; clearInterval(iv); };
    const run = () => {
      running = true; clearInterval(iv);
      iv = setInterval(() => { if (left <= 1) { left = 0; stop(); } else left -= 1; render(); }, tick);
    };
    const pick = (i) => {
      b = i; stop();
      tabs.forEach((t, j) => { t.setAttribute('aria-selected', j === i ? 'true' : 'false'); t.tabIndex = j === i ? 0 : -1; });
      specs.forEach((s, j) => { s.hidden = j !== i; s.classList.toggle('is-new', j === i); });
      lists.forEach((l, j) => { l.hidden = j !== i; });
      if (panel) panel.setAttribute('aria-labelledby', tabs[i].id);
      tags.forEach((t) => { t.textContent = specs[i].dataset.tag; });
      total = left = parseInt(specs[i].dataset.total, 10) || 1;
      measure(); render();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => pick(i));
      t.addEventListener('keydown', (e) => {
        const k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!k) return;
        e.preventDefault();
        const n = (i + k + tabs.length) % tabs.length;
        pick(n); tabs[n].focus();
      });
    });
    timers.forEach((t) => {
      t.querySelector('[data-toggle]').addEventListener('click', () => { if (running) stop(); else { if (left === 0) left = total; run(); } render(); });
      t.querySelector('[data-reset]').addEventListener('click', () => { stop(); left = total; render(); });
    });
    if (tabsBox && pill) { tabsBox.classList.add('is-js'); pill.hidden = false; }
    total = left = parseInt(specs[0].dataset.total, 10) || 1;
    measure(); render();
    addEventListener('resize', measure);
    if (document.fonts) document.fonts.ready.then(measure);
  }
  const all = () => document.querySelectorAll('.brecipe03').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
