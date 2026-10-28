// Featured products 37: Quick add opens a card's sizes in place; picking one adds it to the cart with POST /cart/add.js
// (demo cards only count it). Idempotent so Theme Editor re-renders are safe.
if (!customElements.get("blko-featured-products-37")) {
  customElements.define("blko-featured-products-37", class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.total = 0;
      this.msg = this.querySelector("[data-msg]");
      this.addEventListener("click", (e) => this.onClick(e));
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
      return out.replace(/([.,])00(?!\d)/, "");
    }

    toggle(card, open) {
      const sizes = card.querySelector("[data-sizes]");
      const btn = card.querySelector("[data-open]");
      if (!sizes || !btn) return;
      sizes.hidden = !open;
      btn.hidden = open;
      (open ? sizes.querySelector("button:not(:disabled)") : btn)?.focus();
    }

    onClick(e) {
      const btn = e.target.closest("button");
      const card = btn?.closest("[data-card]");
      if (!card || btn.disabled) return;
      if (btn.hasAttribute("data-close")) return this.toggle(card, false);
      if (btn.hasAttribute("data-open") && !btn.hasAttribute("data-variant")) {
        this.querySelectorAll("[data-card]").forEach((c) => c !== card && !c.querySelector("[data-sizes]")?.hidden && this.toggle(c, false));
        return this.toggle(card, true);
      }
      if (btn.hasAttribute("data-variant")) this.add(card, btn);
    }

    async add(card, btn) {
      const d = this.dataset;
      const variant = btn.dataset.variant;
      const price = Number(btn.dataset.price) || 0;
      const done = () => {
        const count = (Number(card.dataset.count) || 0) + 1;
        card.dataset.count = count;
        const label = card.querySelector("[data-label]");
        if (label) label.textContent = d.addedLabel.replaceAll("[count]", count);
        this.total += price;
        const name = [card.dataset.title, btn.dataset.size].filter(Boolean).join(", ");
        this.say(d.status.replace("[name]", name).replace("[total]", this.money(this.total)));
        if (card.querySelector("[data-sizes]")) this.toggle(card, false);
      };
      if (!variant) {
        done();
        return this.say(`${this.msg.textContent} ${d.demo}`);
      }
      const root = window.Shopify?.routes?.root || "/";
      btn.disabled = true;
      this.say(d.adding);
      try {
        const res = await fetch(`${root}cart/add.js`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ items: [{ id: Number(variant), quantity: 1 }] }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.description || data.message || d.error);
        document.dispatchEvent(new CustomEvent("blko:cart:add", { bubbles: true, detail: data }));
        btn.disabled = false;
        done();
        if (d.after === "cart") window.location.href = `${root}cart`;
      } catch (err) {
        btn.disabled = false;
        this.say(err.message || d.error);
      }
    }

    say(text) {
      this.msg.textContent = text;
    }
  });
}
