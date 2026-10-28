// Collection list 32: the face map and the zone list pick the same zone (click, or arrow keys in the list), which
// fills it on the drawing and swaps the card. Add puts the hero product in the cart with POST /cart/add.js (demo
// zones only flip the button). Idempotent so Theme Editor re-renders are safe.
if (!customElements.get("blko-collection-list-32")) {
  customElements.define("blko-collection-list-32", class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.buttons = [...this.querySelectorAll("[data-zone]")];
      this.msg = this.querySelector("[data-msg]");
      this.buttons.forEach((b) => b.addEventListener("click", () => this.pick(b.dataset.zone)));
      this.querySelectorAll("[data-zone-shape]").forEach((g) => g.addEventListener("click", () => this.pick(g.dataset.zoneShape)));
      this.querySelector("[data-list]")?.addEventListener("keydown", (e) => this.onKey(e));
      this.querySelectorAll("[data-add]").forEach((b) => b.addEventListener("click", () => this.add(b)));
      // Theme Editor: selecting a zone block shows it.
      this.addEventListener("shopify:block:select", (e) => {
        const b = this.buttons.find((x) => x === e.target);
        if (b) this.pick(b.dataset.zone);
      });
    }

    pick(id) {
      let name = "";
      this.buttons.forEach((b) => {
        const on = b.dataset.zone === id;
        if (on) name = b.dataset.name;
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-checked", on ? "true" : "false");
        b.tabIndex = on ? 0 : -1;
      });
      this.querySelectorAll("[data-zone-shape]").forEach((g) => g.classList.toggle("is-on", g.dataset.zoneShape === id));
      this.querySelectorAll("[data-card]").forEach((c) => { c.hidden = c.dataset.card !== id; });
      const map = this.querySelector("[data-map]");
      if (map && this.dataset.mapLabel) map.setAttribute("aria-label", this.dataset.mapLabel.replace("[zone]", name));
    }

    onKey(e) {
      const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      const i = this.buttons.findIndex((b) => b.classList.contains("is-on"));
      const next = this.buttons[(i + dir + this.buttons.length) % this.buttons.length];
      this.pick(next.dataset.zone);
      next.focus();
    }

    say(text) {
      this.msg.textContent = text;
    }

    async add(btn) {
      if (btn.classList.contains("is-in")) return;
      const name = btn.closest("[data-card]")?.querySelector("h3")?.textContent.trim() || "";
      const d = this.dataset;
      const done = () => {
        btn.classList.add("is-in");
        this.say(d.added.replace("[name]", name));
      };
      if (!btn.dataset.variant) {
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
          body: JSON.stringify({ items: [{ id: Number(btn.dataset.variant), quantity: 1 }] }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.description || data.message || d.error);
        document.dispatchEvent(new CustomEvent("blko:cart:add", { bubbles: true, detail: data }));
        btn.disabled = false;
        done();
      } catch (err) {
        btn.disabled = false;
        this.say(err.message || d.error);
      }
    }
  });
}
