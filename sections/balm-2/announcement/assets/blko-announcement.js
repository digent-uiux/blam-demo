if (!customElements.get('blko-announcement')) {
  customElements.define('blko-announcement', class extends HTMLElement {
    connectedCallback() {
      const key = this.dataset.key;
      try { if (key && sessionStorage.getItem(key) === '1' && !window.Shopify?.designMode) this.hidden = true; } catch (e) {}
      this.querySelector('[data-dismiss]')?.addEventListener('click', () => {
        this.hidden = true;
        try { if (key) sessionStorage.setItem(key, '1'); } catch (e) {}
        document.getElementById('MainContent')?.focus({ preventScroll: true });
      });
    }
  });
}
