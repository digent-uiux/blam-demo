// Logo cloud 04: picking a publication shows its quote (fades in).
if (!customElements.get('blko-logo-cloud-04')) {
  customElements.define(
    'blko-logo-cloud-04',
    class extends HTMLElement {
      connectedCallback() {
        this.quote = this.querySelector('[data-quote]');
        this.names = Array.from(this.querySelectorAll('[data-text]'));
        if (!this.quote) return;
        this.onClick = (e) => {
          const btn = e.target.closest('[data-text]');
          if (btn && this.contains(btn)) this.select(btn);
        };
        this.addEventListener('click', this.onClick);
      }

      disconnectedCallback() {
        if (this.onClick) this.removeEventListener('click', this.onClick);
      }

      select(btn) {
        if (btn.getAttribute('aria-pressed') === 'true') return;
        this.names.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        this.quote.textContent = '“' + btn.dataset.text + '”';
        this.quote.classList.add('is-swapping');
        void this.quote.offsetWidth;
        this.quote.classList.remove('is-swapping');
      }
    }
  );
}
