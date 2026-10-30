if (!customElements.get('blko-header-drawer')) {
  customElements.define('blko-header-drawer', class extends HTMLElement {
    connectedCallback() {
      this.details = this.querySelector('details');
      this.summary = this.querySelector('summary');
      this.panel = this.querySelector('[role="dialog"]');
      if (!this.details) return;
      this.summary.setAttribute('aria-expanded', 'false');
      this.summary.setAttribute('aria-controls', this.panel.id);
      this.details.addEventListener('toggle', () => this.onToggle());
      this.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', () => this.close()));
      this.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.details.open) { e.preventDefault(); this.close(); }
        if (e.key === 'Tab' && this.details.open) this.trap(e);
      });
    }
    onToggle() {
      const open = this.details.open;
      this.summary.setAttribute('aria-expanded', String(open));
      document.documentElement.style.overflow = open ? 'hidden' : '';
      if (open) (this.panel.querySelector('nav a') || this.panel).focus();
    }
    close() {
      this.details.open = false;
      this.summary.focus();
    }
    trap(e) {
      const items = [...this.panel.querySelectorAll('a[href], button:not([disabled])')];
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}
