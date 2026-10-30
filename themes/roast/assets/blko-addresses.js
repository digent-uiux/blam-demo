if (!customElements.get('blko-address-form')) {
  customElements.define('blko-address-form', class extends HTMLElement {
    connectedCallback() {
      this.country = this.querySelector('[data-country]');
      this.province = this.querySelector('[data-province]');
      this.wrap = this.querySelector('[data-province-wrap]');
      if (!this.country || !this.province) return;
      if (this.country.dataset.default) this.country.value = this.country.dataset.default;
      this.fill(this.province.dataset.default);
      this.country.addEventListener('change', () => this.fill());
    }
    fill(selected) {
      const option = this.country.options[this.country.selectedIndex];
      let provinces = [];
      try { provinces = JSON.parse(option?.dataset.provinces || '[]'); } catch (e) {}
      this.province.replaceChildren(...provinces.map(([value, label]) => new Option(label, value, false, value === selected)));
      this.wrap.hidden = provinces.length === 0;
    }
  });
  document.addEventListener('submit', (e) => {
    const msg = e.target.dataset && e.target.dataset.confirm;
    if (msg && !window.confirm(msg)) e.preventDefault();
  });
}
