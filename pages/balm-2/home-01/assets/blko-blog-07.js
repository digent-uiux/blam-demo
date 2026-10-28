// Blog 07: topic tabs filter the grid by article tag and the pager pages through it, client side. Idempotent.
if (!customElements.get("blko-blog-07")) {
  customElements.define("blko-blog-07", class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      this.per = Number(this.dataset.perPage) || 6;
      this.tag = "";
      this.page = 1;
      this.items = [...this.querySelectorAll(".blko-bl07__item")];
      this.pages = Math.max(1, Math.ceil(this.items.length / this.per));
      this.tabs = [...this.querySelectorAll("[role=tab]")];
      this.pager = this.querySelector("[data-pager]");
      this.list = this.querySelector("[data-page-list]");
      this.tabs.forEach((t, i) => {
        t.addEventListener("click", () => this.pick(t));
        t.addEventListener("keydown", (e) => {
          const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
          if (!d) return;
          e.preventDefault();
          const next = this.tabs[(i + d + this.tabs.length) % this.tabs.length];
          this.pick(next);
          next.focus();
        });
      });
      this.querySelector("[data-prev]")?.addEventListener("click", () => this.go(this.page - 1));
      this.querySelector("[data-next]")?.addEventListener("click", () => this.go(this.page + 1));
      this.list?.addEventListener("click", (e) => {
        const b = e.target.closest("[data-page]");
        if (b) this.go(Number(b.dataset.page));
      });
    }

    pick(tab) {
      this.tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
      });
      this.tag = tab.dataset.tag || "";
      this.page = 1;
      this.render();
    }

    go(n) {
      this.page = Math.min(Math.max(1, n), this.pages || 1);
      this.render();
    }

    render() {
      const match = this.items.filter((li) => !this.tag || (li.dataset.tags || "").split("|").includes(this.tag));
      this.pages = Math.max(1, Math.ceil(match.length / this.per));
      const from = (this.page - 1) * this.per;
      this.items.forEach((li) => { li.hidden = true; });
      match.slice(from, from + this.per).forEach((li) => { li.hidden = false; });
      this.querySelector("[data-empty]").hidden = match.length > 0;
      this.querySelector("[data-grid]").hidden = match.length === 0;
      const label = this.tabs.find((t) => t.getAttribute("aria-selected") === "true")?.textContent.trim() || "";
      const status = this.querySelector("[data-status]");
      if (status) status.textContent = (this.tag ? this.dataset.countTag : this.dataset.countAll).replace("[number]", match.length).replace("[tag]", label);
      if (!this.pager) return;
      this.pager.hidden = this.pages < 2;
      const tpl = this.dataset.pageLabel || "[number]";
      this.list.replaceChildren(...Array.from({ length: this.pages }, (_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "blko-bl07__page";
        b.dataset.page = i + 1;
        b.textContent = i + 1;
        b.setAttribute("aria-label", tpl.replace("[number]", i + 1));
        if (i + 1 === this.page) b.setAttribute("aria-current", "page");
        return b;
      }));
      this.querySelector("[data-prev]").disabled = this.page === 1;
      this.querySelector("[data-next]").disabled = this.page === this.pages;
    }
  });
}
