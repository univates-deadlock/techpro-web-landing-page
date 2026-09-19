class AudienceHero extends HTMLElement {
  connectedCallback() {
    if (this.querySelector(".audience-hero__section")) return;

    const description = this.textContent.trim();
    this.innerHTML = `
      <section class="audience-hero__section">
        <div class="audience-hero__background" aria-hidden="true"></div>
        <div class="audience-hero__image" aria-hidden="true"></div>
        <div class="audience-hero__container container">
          <div class="audience-hero__content">
            <span class="audience-hero__eyebrow"></span>
            <h1 class="audience-hero__title"></h1>
            <p class="audience-hero__description"></p>
          </div>
        </div>
      </section>
    `;

    this.querySelector(".audience-hero__eyebrow").textContent =
      this.getAttribute("eyebrow") ?? "";
    this.querySelector(".audience-hero__title").textContent =
      this.getAttribute("heading") ?? "";
    this.querySelector(".audience-hero__description").textContent = description;
  }
}

customElements.define("audience-hero", AudienceHero);
