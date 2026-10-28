// Collection toolbar + filters: submit the GET form as soon as a control changes.
// Filter inputs may sit outside the <form> (sidebar) and join it through the form attribute,
// so changes are caught on the custom element. Without JS the form works through its <noscript> buttons.
if (!customElements.get('blko-sort')) {
  customElements.define('blko-sort', class extends HTMLElement {
    connectedCallback() {
      this.form = this.querySelector('form');
      if (!this.form) return;
      this.onChange = (event) => {
        if (!event.target.matches('[data-blko-autosubmit]')) return;
        this.submit();
      };
      this.addEventListener('change', this.onChange);
      // Sidebar filters start collapsed on small screens.
      const sidebar = this.querySelector('[data-blko-sidebar]');
      if (sidebar && window.matchMedia('(max-width: 989px)').matches) sidebar.removeAttribute('open');
    }
    disconnectedCallback() {
      if (this.onChange) this.removeEventListener('change', this.onChange);
    }
    submit() {
      const params = new URLSearchParams();
      new FormData(this.form).forEach((value, key) => {
        if (value !== '') params.append(key, value);
      });
      params.delete('page');
      const query = params.toString();
      window.location.assign(this.form.getAttribute('action') + (query ? '?' + query : ''));
    }
  });
}
