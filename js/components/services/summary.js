const escapeHtml = (value = "") =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character],
  );

class ServiceSummary extends HTMLElement {
  connectedCallback() {
    const icon = escapeHtml(this.getAttribute("icon") ?? "");
    const iconAlt = escapeHtml(this.getAttribute("icon-alt") ?? "");
    const title = escapeHtml(this.getAttribute("title") ?? "");
    const description = escapeHtml(this.getAttribute("description") ?? "");

    this.innerHTML = `
      <div class="service-summary">
        <div class="service-summary__icon-wrapper">
          <img src="${icon}" alt="${iconAlt}" class="service-summary__icon" />
        </div>
        <h2 class="service-summary__title">${title}</h2>
        <p class="service-summary__description">${description}</p>
      </div>
    `;
  }
}

customElements.define("service-summary", ServiceSummary);
