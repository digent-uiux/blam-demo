// Image with products 05: keeps the set line and the button in sync with the ticked products, and adds every ticked
// product to the cart in one POST /cart/add.js (demo products only show the added state). Idempotent so Theme
// Editor re-renders are safe.
if (!customElements.get("blko-image-with-products-05")) {
  customElements.define("blko-image-with-products-05", class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.inputs = [...this.querySelectorAll("[data-item]")];
      this.button = this.querySelector("[data-add]");
      this.label = this.button.querySelector("[data-label]");
      this.msg = this.querySelector("[data-msg]");
      this.words = (this.dataset.words || "").split(",");
      this.inputs.forEach((i) => i.addEventListener("change", () => this.update()));
      this.button.addEventListener("click", () => this.add());
      // First paint comes from Liquid; update() only runs once a tick changes.
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

    state() {
      const d = this.dataset;
      const chosen = this.inputs.filter((i) => i.checked && !i.disabled);
      const subtotal = chosen.reduce((n, i) => n + Number(i.dataset.price), 0);
      const from = Number(d.setFrom), off = Number(d.setOff);
      const isSet = off > 0 && chosen.length >= from;
      // Whole currency units, like the first paint.
      const total = isSet ? Math.round((subtotal * (100 - off)) / 10000) * 100 : subtotal;
      return { chosen, subtotal, isSet, total, from, off };
    }

    // [count] is every product in the set lines, the ticked ones in the button and the message.
    fill(text, st, count = st.chosen.length) {
      const n = st.chosen.length;
      return text
        .replaceAll("[picked]", n).replaceAll("[count]", count)
        .replaceAll("[left]", st.from - n).replaceAll("[percent]", st.off)
        .replaceAll("[words]", this.words[n] ?? n).replaceAll("[total]", this.money(st.total));
    }

    update() {
      const d = this.dataset;
      const st = this.state();
      const n = st.chosen.length;
      this.querySelector("[data-note]").textContent = this.fill(st.isSet ? d.noteSet : d.noteMore, st, this.inputs.length);
      this.querySelector("[data-compare]").hidden = !st.isSet;
      // The old price is the <s>'s own text after the screen-reader "Was ".
      const was = this.querySelector("[data-compare]");
      const run = [...was.childNodes].reverse().find((n) => n.nodeType === 3 && n.nodeValue.trim());
      if (run) run.nodeValue = this.money(st.subtotal); else was.append(this.money(st.subtotal));
      this.querySelector("[data-total]").textContent = this.money(st.total);
      this.button.disabled = n === 0;
      this.button.classList.remove("is-added");
      this.label.textContent = n === 0 ? d.buttonEmpty : this.fill(n === this.inputs.length ? d.buttonAll : d.buttonSome, st);
      this.msg.textContent = "";
    }

    added(st, extra = "") {
      const d = this.dataset;
      const n = st.chosen.length;
      this.button.classList.add("is-added");
      this.label.textContent = d.buttonAdded;
      this.msg.textContent = `${this.fill(n === 1 ? d.addedOne : d.addedOther, st)}${extra ? ` ${extra}` : ""}`;
    }

    async add() {
      const d = this.dataset;
      const st = this.state();
      if (!st.chosen.length || this.button.classList.contains("is-added")) return;
      if (st.chosen.some((i) => !i.dataset.variant)) return this.added(st, d.demo);
      const root = window.Shopify?.routes?.root || "/";
      const label = this.label.textContent;
      this.button.disabled = true;
      this.label.textContent = d.adding;
      try {
        const res = await fetch(`${root}cart/add.js`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ items: st.chosen.map((i) => ({ id: Number(i.dataset.variant), quantity: 1 })) }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.description || data.message || d.error);
        document.dispatchEvent(new CustomEvent("blko:cart:add", { bubbles: true, detail: data }));
        this.button.disabled = false;
        if (d.code && st.isSet) {
          window.location.href = `${root}discount/${encodeURIComponent(d.code)}?redirect=${encodeURIComponent(`${root}cart`)}`;
        } else if (d.after === "cart") {
          window.location.href = `${root}cart`;
        } else {
          this.added(st);
        }
      } catch (err) {
        this.button.disabled = false;
        this.label.textContent = label;
        this.msg.textContent = err.message || d.error;
      }
    }
  });
}
