// Header 01: the menu button opens and closes the mobile drawer (Escape and outside clicks close it).
if (!customElements.get('blko-header-01')) {
  customElements.define(
    'blko-header-01',
    class extends HTMLElement {
      connectedCallback() {
        this.toggle = this.querySelector('[data-menu-toggle]');
        this.drawer = this.querySelector('[data-drawer]');
        if (!this.toggle || !this.drawer) return;
        this.onToggle = () => this.setOpen(this.toggle.getAttribute('aria-expanded') !== 'true');
        this.onKey = (e) => {
          if (e.key === 'Escape' && this.isOpen()) {
            this.setOpen(false);
            this.toggle.focus();
          }
        };
        this.onDoc = (e) => {
          if (this.isOpen() && !this.contains(e.target)) this.setOpen(false);
        };
        this.toggle.addEventListener('click', this.onToggle);
        document.addEventListener('keydown', this.onKey);
        document.addEventListener('click', this.onDoc);
      }

      disconnectedCallback() {
        if (!this.toggle) return;
        this.toggle.removeEventListener('click', this.onToggle);
        document.removeEventListener('keydown', this.onKey);
        document.removeEventListener('click', this.onDoc);
      }

      isOpen() {
        return this.toggle.getAttribute('aria-expanded') === 'true';
      }

      setOpen(open) {
        this.toggle.setAttribute('aria-expanded', String(open));
        this.toggle.setAttribute('aria-label', open ? this.toggle.dataset.labelClose : this.toggle.dataset.labelOpen);
        this.drawer.hidden = !open;
      }
    }
  );
}
