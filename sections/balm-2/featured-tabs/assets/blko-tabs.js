// Accessible tabs: a [role=tablist] of [role=tab] buttons, each aria-controls a [role=tabpanel].
// Arrow Left/Right, Home and End move focus and selection. Without JS the first panel is the only one shown.
if (!customElements.get('blko-tabs')) {
  customElements.define('blko-tabs', class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.tabs = Array.from(this.querySelectorAll('[role="tab"]'));
      this.tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => this.select(i));
        tab.addEventListener('keydown', (e) => this.onKey(e, i));
      });
    }

    onKey(e, i) {
      const n = this.tabs.length;
      let next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % n;
      else if (e.key === 'ArrowLeft') next = (i - 1 + n) % n;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = n - 1;
      if (next === null) return;
      e.preventDefault();
      this.select(next);
      this.tabs[next].focus();
    }

    select(index) {
      this.tabs.forEach((tab, i) => {
        const on = i === index;
        tab.setAttribute('aria-selected', String(on));
        tab.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
    }
  });
}
