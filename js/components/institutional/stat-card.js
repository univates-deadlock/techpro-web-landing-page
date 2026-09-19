class InstitutionalStatCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <article class="stats-institutional__item">
        <strong class="stats-institutional__number"></strong>
        <span class="stats-institutional__label"></span>
      </article>
    `;

    const icon = document.createElement("img");
    icon.className = "stats-institutional__icon";
    icon.src = this.getAttribute("icon") ?? "";
    icon.alt = this.getAttribute("icon-alt") || this.getAttribute("label") || "Estatística";
    this.querySelector("article").prepend(icon);

    this.querySelector("strong").textContent = this.getAttribute("value") ?? "";
    this.querySelector("span").textContent = this.getAttribute("label") ?? "";
  }
}

customElements.define("institutional-stat-card", InstitutionalStatCard);
