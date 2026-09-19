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

class ServiceProcessCard extends HTMLElement {
  connectedCallback() {
    const icon = escapeHtml(this.getAttribute("icon") ?? "");
    const title = escapeHtml(this.getAttribute("title") ?? "");
    const description = escapeHtml(this.getAttribute("description") ?? "");

    this.innerHTML = `
      <article class="services__process-card">
        <img class="services__process-icon" src="${icon}" alt="" />
        <h3 class="services__process-card-title">${title}</h3>
        <p class="services__process-card-description">${description}</p>
      </article>
    `;
  }
}

customElements.define("service-process-card", ServiceProcessCard);
