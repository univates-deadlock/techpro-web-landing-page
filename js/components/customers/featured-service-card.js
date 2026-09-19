import { renderImageCard } from "../shared/image-card.js";

class FeaturedServiceCard extends HTMLElement {
  connectedCallback() {
    renderImageCard(this, "featured");
  }
}

customElements.define("featured-service-card", FeaturedServiceCard);
