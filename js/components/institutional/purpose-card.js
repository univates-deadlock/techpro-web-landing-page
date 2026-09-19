class InstitutionalPurposeCard extends HTMLElement {
  connectedCallback() {
    if (this.querySelector(".purpose-institutional__card")) return;

    const description = this.textContent.trim();
    this.innerHTML = `
      <h3 class="purpose-institutional__title"></h3>
      <article class="purpose-institutional__card">
        <p class="purpose-institutional__text"></p>
      </article>
    `;

    this.querySelector("h3").textContent = this.getAttribute("heading") ?? "";
    this.querySelector("p").textContent = description;
  }
}

customElements.define("institutional-purpose-card", InstitutionalPurposeCard);
