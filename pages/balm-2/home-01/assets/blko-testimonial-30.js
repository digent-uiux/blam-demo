// Testimonial 30: the measure chips swap every note's score dots, its label and the change pill. Idempotent.
if (!customElements.get("blko-testimonial-30")) {
  customElements.define("blko-testimonial-30", class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.chips = [...this.querySelectorAll("[data-chip]")];
      this.chips.forEach((c) => c.addEventListener("click", () => this.pick(Number(c.dataset.chip))));
    }

    pick(i) {
      const chip = this.chips.find((c) => Number(c.dataset.chip) === i);
      if (!chip) return;
      const label = chip.dataset.label;
      this.chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      const tpl = this.dataset.score || "[measure] [score]";
      this.querySelectorAll(".blko-tm30__row").forEach((row) => {
        const a = Number((row.dataset.a || "").split(",")[i]) || 0;
        const b = Number((row.dataset.b || "").split(",")[i]) || 0;
        row.querySelectorAll("[data-page]").forEach((page) => {
          const v = page.dataset.page === "1" ? a : b;
          page.querySelector("[data-measure-label]").textContent = label;
          const dots = page.querySelector("[data-dots]");
          dots.setAttribute("aria-label", tpl.replace("[measure]", label).replace("[score]", v));
          [...dots.children].forEach((d, n) => d.classList.toggle("is-on", n < v));
        });
        const change = b - a;
        const el = row.querySelector("[data-change]");
        if (el) el.textContent = change > 0 ? `+${change}` : change === 0 ? this.dataset.same : String(change);
        const sr = row.querySelector("[data-change-sr]");
        if (sr) sr.textContent = `${label.toLowerCase()} ${this.dataset.srSuffix || ""}`;
      });
      this.dataset.measure = i;
    }
  });
}
