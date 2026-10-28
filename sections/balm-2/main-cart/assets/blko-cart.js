if (!customElements.get('blko-cart-form')) {
  customElements.define('blko-cart-form', class extends HTMLElement {
    connectedCallback() {
      this.form = this.querySelector('form');
      if (!this.form) return;
      this.dataset.ready = '';
      this.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-step]');
        if (!btn) return;
        const input = btn.parentElement.querySelector('input[type="number"]');
        input.value = Math.max(0, (parseInt(input.value, 10) || 0) + Number(btn.dataset.step));
        this.queue();
      });
      this.addEventListener('change', (e) => {
        if (e.target.matches('input[name="updates[]"]')) this.queue();
      });
    }
    queue() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const update = this.form.querySelector('[name="update"]');
        this.form.requestSubmit ? this.form.requestSubmit(update) : this.form.submit();
      }, 500);
    }
  });
}
