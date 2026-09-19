export function renderImageCard(host, page) {
  if (host.querySelector(".image-card")) return;

  const caption = host.getAttribute("caption") ?? "";
  const variant = host.getAttribute("variant");

  host.innerHTML = `
    <article class="image-card image-card--${page}">
      <div class="image-card__image">
        <img />
      </div>
      <p class="image-card__caption"></p>
    </article>
  `;

  if (variant && /^[a-z0-9-]+$/.test(variant)) {
    host.querySelector(".image-card").classList.add(`image-card--${variant}`);
  }

  const image = host.querySelector("img");
  image.src = host.getAttribute("image") ?? "";
  image.alt = host.getAttribute("alt") ?? caption;
  host.querySelector(".image-card__caption").textContent = caption;
}
