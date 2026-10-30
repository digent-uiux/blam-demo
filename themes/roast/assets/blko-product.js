// Product page: gallery (thumbs, lightbox, hover zoom, 3D), variant picker (buttons / dropdown / swatches),
// quantity stepper, share button and page pop-ups.
// Without JS the gallery shows every media item and a plain variant <select> stays in the form.

(() => {
  const bindDialog = (dialog) => {
    if (!dialog || dialog.dataset.blkoBound) return;
    dialog.dataset.blkoBound = '';
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.closest('[data-blko-close]')) dialog.close();
    });
  };

  if (!customElements.get('blko-product-gallery')) {
    customElements.define('blko-product-gallery', class extends HTMLElement {
      connectedCallback() {
        if (this.bound) return;
        this.bound = true;
        this.layout = this.dataset.layout || 'thumbs_left';
        this.lightbox = this.querySelector('[data-blko-lightbox]');
        bindDialog(this.lightbox);
        if (this.querySelector('.blko-pdp__thumb')) this.setAttribute('data-ready', '');

        this.addEventListener('click', (event) => {
          const thumb = event.target.closest('.blko-pdp__thumb');
          if (thumb) this.show(thumb.dataset.mediaId);
          const zoom = event.target.closest('[data-blko-zoom]');
          if (zoom) this.openLightbox(zoom.dataset.blkoZoom);
        });

        if (this.dataset.zoom === 'hover' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          this.addEventListener('pointermove', (event) => this.hoverZoom(event));
          this.addEventListener('pointerleave', () => this.resetZoom());
        }

        this.setupModels();
      }

      show(id) {
        const target = id && this.querySelector(`.blko-pdp__slide[data-media-id="${id}"]`);
        if (!target) return;
        this.querySelectorAll('.blko-pdp__slide').forEach((slide) => {
          const active = slide === target;
          slide.classList.toggle('is-active', active);
          if (!active) slide.querySelectorAll('video').forEach((video) => video.pause());
        });
        this.querySelectorAll('.blko-pdp__thumb').forEach((thumb) => {
          thumb.setAttribute('aria-pressed', String(thumb.dataset.mediaId === String(id)));
        });
        // Stack and grid move the active media first with CSS order; bring it into view.
        if (this.layout === 'stack' || this.layout === 'grid') {
          const stage = this.querySelector('.blko-pdp__stage');
          if (stage && stage.scrollWidth > stage.clientWidth) stage.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }

      openLightbox(id) {
        if (!this.lightbox || !this.lightbox.showModal) return;
        this.lightbox.showModal();
        const item = this.lightbox.querySelector(`[data-media-id="${id}"]`);
        if (item) item.scrollIntoView({ block: 'start' });
      }

      hoverZoom(event) {
        const slide = event.target.closest('.blko-pdp__slide--image');
        if (!slide) return this.resetZoom();
        const img = slide.querySelector('.blko-pdp__img');
        if (!img) return;
        if (this.zoomed && this.zoomed !== slide) this.resetZoom();
        const rect = slide.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        slide.classList.add('is-zoomed');
        this.zoomed = slide;
      }

      resetZoom() {
        if (!this.zoomed) return;
        this.zoomed.classList.remove('is-zoomed');
        this.zoomed = null;
      }

      setupModels() {
        const models = this.querySelectorAll('model-viewer');
        if (!models.length || !window.Shopify || !window.Shopify.loadFeatures) return;
        const json = this.querySelector('[data-blko-models]');
        window.Shopify.loadFeatures([
          {
            name: 'model-viewer-ui',
            version: '1.0',
            onLoad: (error) => {
              if (error || !window.Shopify.ModelViewerUI) return;
              models.forEach((model) => {
                if (!model.blkoUi) model.blkoUi = new window.Shopify.ModelViewerUI(model);
              });
            },
          },
          {
            name: 'shopify-xr',
            version: '1.0',
            onLoad: (error) => {
              if (error || !window.ShopifyXR || !json) return;
              try { window.ShopifyXR.addModels(JSON.parse(json.textContent)); } catch (e) { return; }
              window.ShopifyXR.setupXRElements();
            },
          },
        ]);
      }
    });
  }

  if (!customElements.get('blko-product')) {
    customElements.define('blko-product', class extends HTMLElement {
      connectedCallback() {
        if (this.bound) return;
        this.bound = true;
        this.variants = this.readJson('[data-blko-variants]') || [];
        this.strings = this.readJson('[data-blko-strings]') || {};
        this.options = this.querySelector('[data-blko-options]');
        if (this.options) {
          this.setAttribute('data-ready', '');
          this.options.addEventListener('change', () => this.onOptionChange());
        }
        this.addEventListener('click', (event) => {
          const step = event.target.closest('[data-blko-qty]');
          if (step) this.stepQuantity(Number(step.dataset.blkoQty));
        });
      }

      readJson(selector) {
        const node = this.querySelector(selector);
        if (!node) return null;
        try { return JSON.parse(node.textContent); } catch (e) { return null; }
      }

      stepQuantity(direction) {
        const input = this.querySelector('.blko-pdp__qty-input');
        if (!input) return;
        const min = Number(input.min) || 1;
        const step = Number(input.step) || 1;
        const max = input.max ? Number(input.max) : Infinity;
        const next = (Number(input.value) || min) + direction * step;
        input.value = Math.min(max, Math.max(min, next));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }

      selectedOptions() {
        return Array.from(this.options.querySelectorAll('[data-blko-option]')).map((group) => {
          const select = group.querySelector('select');
          const checked = group.querySelector('input:checked');
          const value = select ? select.value : checked ? checked.value : null;
          const label = group.querySelector('[data-blko-option-value]');
          if (label && value !== null) label.textContent = value;
          return value;
        });
      }

      onOptionChange() {
        const selected = this.selectedOptions();
        const variant = this.variants.find((v) => v.options.every((value, i) => value === selected[i]));
        this.markAvailability(selected);
        this.update(variant);
      }

      // A value is available when some available variant has it together with the other selected values.
      markAvailability(selected) {
        this.options.querySelectorAll('[data-blko-option]').forEach((group) => {
          const index = Number(group.dataset.blkoOption);
          const isAvailable = (value) => this.variants.some((v) => v.available
            && v.options[index] === value
            && v.options.every((other, j) => j === index || other === selected[j]));
          group.querySelectorAll('input[type="radio"]').forEach((input) => {
            const label = group.querySelector(`label[for="${input.id}"]`);
            if (label) label.classList.toggle('is-unavailable', !isAvailable(input.value));
          });
          group.querySelectorAll('option').forEach((option) => {
            const base = option.dataset.label || option.value;
            option.textContent = isAvailable(option.value) ? base : `${base} - ${this.strings.unavailable || ''}`;
          });
        });
      }

      setText(selector, text, hide) {
        this.querySelectorAll(selector).forEach((node) => {
          node.textContent = text;
          node.hidden = Boolean(hide);
        });
      }

      update(variant) {
        const button = this.querySelector('[data-blko-add]');
        const label = this.querySelector('[data-blko-add-label]');
        if (!variant) {
          if (button) button.disabled = true;
          if (label) label.textContent = this.strings.unavailable || '';
          this.querySelectorAll('[data-blko-inventory]').forEach((node) => { node.hidden = true; });
          return;
        }

        const idField = this.querySelector('[data-blko-variant-id]');
        if (idField) {
          idField.value = variant.id;
          idField.dispatchEvent(new Event('change', { bubbles: true }));
        }
        if (button) button.disabled = !variant.available;
        if (label) label.textContent = variant.available ? this.strings.add : this.strings.soldOut;

        this.querySelectorAll('[data-blko-price]').forEach((node) => {
          if (variant.priceHtml) node.innerHTML = variant.priceHtml;
        });
        const onSale = variant.compare > variant.price;
        const pct = onSale ? Math.round(((variant.compare - variant.price) * 100) / variant.compare) : 0;
        this.setText('[data-blko-sale-badge]', onSale ? (this.strings.sale || '').replace('[percent]', pct) : '', !onSale);
        this.setText('[data-blko-sku]', (this.strings.sku || '').replace('[sku]', variant.sku || ''), !variant.sku);
        this.updateInventory(variant);
        this.updateQuantityRules(variant);

        if (variant.media) {
          const gallery = this.querySelector('blko-product-gallery');
          if (gallery && gallery.show) gallery.show(variant.media);
        }
        if (this.dataset.url) {
          const url = new URL(this.dataset.url, window.location.origin);
          url.search = window.location.search;
          url.searchParams.set('variant', variant.id);
          window.history.replaceState({}, '', url.toString());
        }
      }

      updateInventory(variant) {
        this.querySelectorAll('[data-blko-inventory]').forEach((node) => {
          let state = 'in';
          if (!variant.available) state = 'out';
          else if (variant.stock === 0) state = 'backorder';
          else if (typeof variant.stock === 'number' && variant.stock > 0) state = 'low';
          const text = {
            in: this.strings.inStock,
            out: this.strings.outOfStock,
            backorder: this.strings.backorder,
            low: (this.strings.lowStock || '').replace('[count]', variant.stock),
          }[state];
          node.dataset.state = state;
          const textNode = node.querySelector('[data-blko-inventory-text]');
          if (textNode) textNode.textContent = text || '';
          node.hidden = state === 'in' && node.dataset.showInStock === 'false';
        });
      }

      updateQuantityRules(variant) {
        const input = this.querySelector('.blko-pdp__qty-input');
        if (!input) return;
        input.min = variant.qmin || 1;
        input.step = variant.qstep || 1;
        if (variant.qmax) input.max = variant.qmax; else input.removeAttribute('max');
        if (Number(input.value) < Number(input.min)) input.value = input.min;
      }
    });
  }

  if (!customElements.get('blko-share')) {
    customElements.define('blko-share', class extends HTMLElement {
      connectedCallback() {
        if (this.bound) return;
        this.bound = true;
        const button = this.querySelector('[data-blko-share]');
        const status = this.querySelector('[data-blko-share-status]');
        if (!button) return;
        button.addEventListener('click', () => {
          const data = { url: this.dataset.url || window.location.href, title: this.dataset.title || document.title };
          if (navigator.share) {
            navigator.share(data).catch(() => {});
            return;
          }
          if (!navigator.clipboard) return;
          navigator.clipboard.writeText(data.url).then(() => {
            if (!status) return;
            status.textContent = status.dataset.copied || '';
            clearTimeout(this.timer);
            this.timer = setTimeout(() => { status.textContent = ''; }, 2500);
          }).catch(() => {});
        });
      }
    });
  }

  if (!customElements.get('blko-product-popup')) {
    customElements.define('blko-product-popup', class extends HTMLElement {
      connectedCallback() {
        if (this.bound) return;
        this.bound = true;
        const dialog = this.querySelector('dialog');
        const open = this.querySelector('[data-blko-open]');
        bindDialog(dialog);
        if (open && dialog && dialog.showModal) open.addEventListener('click', () => dialog.showModal());
      }
    });
  }
})();
