// "Pairs well with": loads complementary products from the Product Recommendations API
// and swaps them in. Keeps the server-rendered fallback list when the API returns nothing.
if (!customElements.get('blko-recommendations')) {
  customElements.define('blko-recommendations', class extends HTMLElement {
    connectedCallback() {
      const url = this.dataset.url;
      if (!url || this.loaded) return;
      this.loaded = true;
      fetch(url)
        .then((response) => (response.ok ? response.text() : ''))
        .then((text) => {
          if (!text) return;
          const doc = new DOMParser().parseFromString(text, 'text/html');
          const fresh = doc.querySelector('blko-recommendations');
          if (!fresh || !fresh.querySelector('[data-blko-recommendations-list] li')) return;
          this.innerHTML = fresh.innerHTML;
          this.hidden = false;
        })
        .catch(() => {});
    }
  });
}
