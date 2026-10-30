/* Shared control behavior. Idempotent across bundles and Theme Editor section reloads. */
(() => {
  if (!customElements.get('blko-ui-quantity')) customElements.define('blko-ui-quantity', class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.addEventListener('click', event => {
        const button = event.target.closest('button[data-step]');
        if (!button || !this.contains(button)) return;
        this.value = Number(this.querySelector('[data-value]').textContent) + Number(button.dataset.step);
      });
    }
    get value() { return Number(this.querySelector('[data-value]').textContent); }
    set value(value) {
      const min = Number(this.dataset.min), max = Number(this.dataset.max);
      const next = Math.min(max, Math.max(min, Number.isFinite(Number(value)) ? Number(value) : min));
      this.querySelector('[data-value]').textContent = String(next);
      this.querySelector('[data-step="-1"]').disabled = next <= min;
      this.querySelector('[data-step="1"]').disabled = next >= max;
      const input = this.querySelector('input');
      if (input) { input.value = String(next); input.dispatchEvent(new Event('change', { bubbles: true })); }
      this.dispatchEvent(new CustomEvent('blko-ui:change', { bubbles: true, detail: { value: next } }));
    }
  });
  if (!customElements.get('blko-ui-tabs')) customElements.define('blko-ui-tabs', class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.addEventListener('click', event => {
        const tab = event.target.closest('[role="tab"]');
        if (tab && tab.closest('blko-ui-tabs') === this) this.select(tab);
      });
      this.addEventListener('keydown', event => {
        const tab = event.target.closest('[role="tab"]');
        if (!tab || tab.closest('blko-ui-tabs') !== this) return;
        const tabs = this.tabs, at = tabs.indexOf(tab);
        const next = event.key === 'ArrowRight' ? (at + 1) % tabs.length : event.key === 'ArrowLeft' ? (at - 1 + tabs.length) % tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1;
        if (next < 0) return;
        event.preventDefault(); this.select(tabs[next]); tabs[next].focus();
      });
    }
    get tabs() { return Array.from(this.querySelectorAll('[role="tab"]')).filter(tab => tab.closest('blko-ui-tabs') === this); }
    select(tab) {
      const tabs = this.tabs;
      tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1;
        const panelId = item.getAttribute('aria-controls');
        const panel = panelId && Array.from(this.querySelectorAll('[role="tabpanel"]')).find(panel => panel.id === panelId);
        if (panel) panel.hidden = !selected;
      });
      this.dispatchEvent(new CustomEvent('blko-ui:change', { bubbles: true, detail: { value: tab.dataset.value, index: tabs.indexOf(tab) } }));
    }
  });
  if (window.blkoUiCommerceActions) return;
  window.blkoUiCommerceActions = true;
  document.addEventListener('click', event => {
    const option = event.target.closest('[data-blko-ui-option]');
    if (option) {
      if (option.disabled || option.getAttribute('aria-disabled') === 'true') return;
      const group = option.closest('[data-blko-ui-options]');
      if (group) group.querySelectorAll('[data-blko-ui-option]').forEach(item => {
        if (item.closest('[data-blko-ui-options]') === group) item.setAttribute('aria-pressed', String(item === option));
      });
      else option.setAttribute('aria-pressed', String(option.getAttribute('aria-pressed') !== 'true'));
      option.dispatchEvent(new CustomEvent('blko-ui:change', { bubbles: true, detail: { value: option.value, selected: option.getAttribute('aria-pressed') === 'true' } }));
    }
    const action = event.target.closest('[data-blko-ui-wishlist], [data-blko-ui-quick-add]');
    if (!action) return;
    const card = action.closest('.blko-ui-product-card');
    action.dispatchEvent(new CustomEvent(action.hasAttribute('data-blko-ui-wishlist') ? 'blko-ui:wishlist' : 'blko-ui:quick-add', { bubbles: true, detail: { variantId: card?.dataset.variantId || null, card } }));
  });
})();
