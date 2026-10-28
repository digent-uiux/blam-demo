// Bundle 01: keeps the checklist, hotspots, total and button in sync, and adds every ticked piece to the cart in one
// /cart/add.js call. Idempotent so Theme Editor re-renders are safe.
if (!customElements.get("blko-bundle-01")) {
  customElements.define("blko-bundle-01", class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.inputs = [...this.querySelectorAll("[data-piece]")];
      this.button = this.querySelector("[data-add]");
      this.msg = this.querySelector("[data-msg]");
      this.inputs.forEach((i) => i.addEventListener("change", () => this.update()));
      this.button.addEventListener("click", () => this.add());
      this.update();
    }

    money(cents) {
      const format = this.dataset.moneyFormat || "${{amount}}";
      const fixed = (n, d, t = ",", c = ".") => {
        const [whole, frac] = (n / 100).toFixed(d).split(".");
        return whole.replace(/\B(?=(\d{3})+(?!\d))/g, t) + (frac ? c + frac : "");
      };
      const out = format.replace(/\{\{\s*(\w+)\s*\}\}/, (_, key) => ({
        amount: fixed(cents, 2), amount_no_decimals: fixed(cents, 0),
        amount_with_comma_separator: fixed(cents, 2, ".", ","), amount_no_decimals_with_comma_separator: fixed(cents, 0, "."),
        amount_with_apostrophe_separator: fixed(cents, 2, "'"), amount_with_space_separator: fixed(cents, 2, " ", ","),
        amount_no_decimals_with_space_separator: fixed(cents, 0, " "),
      })[key] ?? fixed(cents, 2));
      // Same as Liquid's money_without_trailing_zeros, which renders the first paint.
      return out.replace(/([.,])00(?!\d)/, "");
    }

    update() {
      const d = this.dataset;
      const chosen = this.inputs.filter((i) => i.checked);
      const subtotal = chosen.reduce((s, i) => s + Number(i.dataset.price), 0);
      const percent = Number(d.percent), min = Number(d.min);
      const qualifies = percent > 0 && chosen.length >= min;
      const save = qualifies ? Math.round((subtotal / 100) * (percent / 100)) * 100 : 0;
      const left = min - chosen.length;
      const fill = (s) => s.replaceAll("[count]", chosen.length).replaceAll("[percent]", percent).replaceAll("[amount]", this.money(save));

      this.inputs.forEach((i) => {
        i.closest(".blko-b01__row")?.classList.toggle("is-on", i.checked);
        this.querySelector(`[data-dot="${i.dataset.piece}"]`)?.classList.toggle("is-on", i.checked);
      });
      const note = percent === 0 ? "" : qualifies ? fill(d.noteSave)
        : (left === 1 ? d.noteMoreOne : d.noteMoreOther).replaceAll("[count]", left).replaceAll("[percent]", percent);
      this.querySelector("[data-note]").textContent = note;
      const total = this.querySelector("[data-total]");
      total.textContent = this.money(subtotal - save);
      total.classList.toggle("is-sale", qualifies);
      this.querySelector("[data-compare]").hidden = !qualifies;
      this.querySelector("[data-compare-amount]").textContent = this.money(subtotal);
      this.button.disabled = chosen.length === 0;
      this.button.textContent = chosen.length === 0 ? d.buttonEmpty : fill(chosen.length === 1 ? d.buttonOne : d.buttonOther);
      this.qualifies = qualifies;
      this.say("");
    }

    say(text) {
      this.msg.textContent = text;
      this.msg.hidden = !text;
    }

    async add() {
      const chosen = this.inputs.filter((i) => i.checked);
      if (chosen.some((i) => !i.dataset.variant)) return this.say(this.dataset.demo);
      const root = window.Shopify?.routes?.root || "/";
      const label = this.button.textContent;
      this.button.disabled = true;
      this.button.textContent = this.dataset.adding;
      try {
        const res = await fetch(`${root}cart/add.js`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ items: chosen.map((i) => ({ id: Number(i.dataset.variant), quantity: 1 })) }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.description || data.message || this.dataset.error);
        document.dispatchEvent(new CustomEvent("blko:cart:add", { bubbles: true, detail: data }));
        const code = this.dataset.code;
        if (code && this.qualifies) {
          window.location.href = `${root}discount/${encodeURIComponent(code)}?redirect=${encodeURIComponent(`${root}cart`)}`;
        } else if (this.dataset.after === "cart") {
          window.location.href = `${root}cart`;
        } else {
          this.button.disabled = false;
          this.button.textContent = label;
          this.say(this.dataset.added);
        }
      } catch (e) {
        this.button.disabled = false;
        this.button.textContent = label;
        this.say(e.message || this.dataset.error);
      }
    }
  });
}
