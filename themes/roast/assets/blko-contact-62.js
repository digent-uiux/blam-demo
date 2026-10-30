// contact-62: topic chips with a sliding pill (sets the hidden Topic field), the order field opens for some topics,
// a live character count, and a sending state on submit (the form posts to Shopify's contact endpoint).
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const wrap = root.querySelector('[data-chips]'), pill = root.querySelector('[data-pill]'), chips = [...root.querySelectorAll('[data-chip]')];
    const topic = root.querySelector('[data-topic-input]'), order = root.querySelector('[data-order-wrap]');
    const orderInput = order && order.querySelector('input');
    const place = (c) => { if (!pill || !c) return; pill.style.left = c.offsetLeft + 'px'; pill.style.width = c.offsetWidth + 'px'; pill.classList.add('is-set'); wrap.classList.add('has-pill'); };
    const pick = (c) => {
      chips.forEach((x) => { const on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)); });
      if (topic) topic.value = c.dataset.label;
      const open = c.dataset.order === '1';
      if (order) { order.classList.toggle('is-open', open); if (orderInput) { if (open) orderInput.removeAttribute('tabindex'); else orderInput.setAttribute('tabindex', '-1'); } }
      place(c);
    };
    chips.forEach((c) => c.addEventListener('click', () => pick(c)));
    const first = chips.find((c) => c.classList.contains('is-on')) || chips[0];
    if (first) { place(first); if (orderInput && first.dataset.order !== '1') orderInput.setAttribute('tabindex', '-1'); }
    addEventListener('resize', () => place(chips.find((c) => c.classList.contains('is-on'))));
    const ta = root.querySelector('textarea'), note = root.querySelector('[data-note]');
    if (ta) { ta.maxLength = 600; ta.addEventListener('input', () => { note.textContent = note.dataset.tpl.replace('[n]', ta.value.length); }); }
    const form = root.querySelector('form'), send = root.querySelector('[data-send]');
    if (form && send) form.addEventListener('submit', () => { send.disabled = true; send.querySelector('[data-idle-wrap]').hidden = true; send.querySelector('[data-busy]').hidden = false; });
  }
  const all = () => document.querySelectorAll('.bcontact62').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
