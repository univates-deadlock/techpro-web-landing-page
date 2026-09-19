import { renderImageCard } from "../shared/image-card.js";

class IndustryServiceCard extends HTMLElement {
  connectedCallback() {
    renderImageCard(this, "industry");
  }
}

customElements.define("industry-service-card", IndustryServiceCard);
