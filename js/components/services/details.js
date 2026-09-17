const parseItems = (items) => {
  try {
    const parsedItems = JSON.parse(items ?? "[]");

    return Array.isArray(parsedItems)
      ? parsedItems.filter((item) => typeof item === "string")
      : [];
  } catch {
    return [];
  }
};

const escapeHtml = (value) =>
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

const renderListItems = (items) =>
  items
    .map(
      (item) => `
        <li class="service-details__item">
          <span class="service-details__check" aria-hidden="true">✓</span>
          <span>${escapeHtml(item)}</span>
        </li>
      `,
    )
    .join("");

class ServiceDetails extends HTMLElement {
  connectedCallback() {
    const benefits = parseItems(this.getAttribute("benefits"));
    const applications = parseItems(this.getAttribute("applications"));

    this.innerHTML = `
      <div class="service-details">
        <section class="service-details__card">
          <h3 class="service-details__title">Benefícios</h3>
          <ul class="service-details__list">
            ${renderListItems(benefits)}
          </ul>
        </section>
        <section class="service-details__card">
          <h3 class="service-details__title">Aplicações</h3>
          <ul class="service-details__list">
            ${renderListItems(applications)}
          </ul>
        </section>
      </div>
    `;
  }
}

customElements.define("service-details", ServiceDetails);
