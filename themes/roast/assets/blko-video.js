// Deferred video: a cover with a play button; on click the <template> player replaces the cover and starts.
if (!customElements.get('blko-video')) {
  customElements.define('blko-video', class extends HTMLElement {
    connectedCallback() {
      if (this.ready) return;
      this.ready = true;
      const button = this.querySelector('.blko-video__play');
      if (button) button.addEventListener('click', () => this.play(), { once: true });
    }

    play() {
      const template = this.querySelector('template');
      if (!template) return;
      const player = template.content.firstElementChild && template.content.firstElementChild.cloneNode(true);
      if (!player) return;
      this.replaceChildren(player);
      if (player.tagName === 'VIDEO') {
        const p = player.play();
        if (p && p.catch) p.catch(() => {});
      }
      player.focus && player.focus();
    }
  });
}
