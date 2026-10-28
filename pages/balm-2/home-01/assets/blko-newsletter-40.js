// Newsletter 40: concern chips (up to the max), client-side checks, then the native Shopify customer form post with
// contact[tags] = newsletter + the picked concerns. "Use another email" brings the form back. Idempotent.
if (!customElements.get("blko-newsletter-40")) {
  customElements.define("blko-newsletter-40", class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.max = Number(this.dataset.max) || 3;
      this.form = this.querySelector("form");
      this.chips = [...this.querySelectorAll("[data-chip]")];
      this.note = this.querySelector("[data-note]");
      this.email = this.querySelector("[data-email]");
      this.error = this.querySelector("[data-error]");
      this.chips.forEach((c) => c.addEventListener("click", () => this.toggle(c)));
      this.form?.addEventListener("submit", (e) => this.submit(e));
      this.email?.addEventListener("input", () => { if (!this.error.hidden) this.setError(""); });
      this.querySelector("[data-again]")?.addEventListener("click", () => {
        this.querySelector("[data-done]").hidden = true;
        this.querySelector("[data-fields]").hidden = false;
        this.email.value = "";
        this.email.focus();
      });
    }

    picks() { return this.chips.filter((c) => c.getAttribute("aria-pressed") === "true"); }

    toggle(chip) {
      if (chip.getAttribute("aria-pressed") === "true") {
        chip.setAttribute("aria-pressed", "false");
        this.note.textContent = "";
        return;
      }
      if (this.picks().length >= this.max) {
        this.note.textContent = this.dataset.noteMax || "";
        return;
      }
      this.note.textContent = "";
      chip.setAttribute("aria-pressed", "true");
    }

    setError(msg) {
      this.error.textContent = msg;
      this.error.hidden = !msg;
      if (msg) {
        this.email.setAttribute("aria-invalid", "true");
        this.email.setAttribute("aria-describedby", this.error.id);
      } else {
        this.email.removeAttribute("aria-invalid");
        this.email.removeAttribute("aria-describedby");
      }
    }

    submit(e) {
      const picks = this.picks();
      if (this.chips.length && !picks.length) {
        e.preventDefault();
        this.note.textContent = this.dataset.noteNone || "";
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(this.email.value.trim())) {
        e.preventDefault();
        this.setError(this.dataset.error || "");
        this.email.focus();
        return;
      }
      this.setError("");
      this.note.textContent = "";
      this.querySelector("[data-tags]").value = ["newsletter", ...picks.map((c) => c.dataset.chip)].join(", ");
    }
  });
}
