class ContactInvitation extends HTMLElement {
  connectedCallback() {
    if (this.querySelector(".contact-invitation")) return;

    const title =
      this.getAttribute("heading") ||
      this.getAttribute("title") ||
      "Pronto para proteger o que mais importa?";

    const text =
      this.getAttribute("description") ||
      this.getAttribute("text") ||
      "Solicite um orçamento gratuito e personalizado. Nossa equipe responde em até 1 hora útil.";

    const buttonText =
      this.getAttribute("button-text") || "FAÇA SEU ORÇAMENTO";

    const buttonHref =
      this.getAttribute("button-href") || "/pages/contact.html";

    const imageSrc =
      this.getAttribute("image-src") || "/assets/images/home/mascot.png";

    const imageAlt =
      this.getAttribute("image-alt") || "Robô TechPro";

    this.innerHTML = `
      <section class="contact-invitation">
        <div class="contact-invitation__container">
          <div class="contact-invitation__content">
            <h2 class="contact-invitation__title"></h2>
            <p class="contact-invitation__text"></p>
            <a class="contact-invitation__button btn btn--primary"></a>
          </div>
          <div class="contact-invitation__image">
            <img />
          </div>
        </div>
      </section>
    `;

    this.querySelector(".contact-invitation__title").textContent = title;
    this.querySelector(".contact-invitation__text").textContent = text;

    const button = this.querySelector(".contact-invitation__button");
    button.textContent = buttonText;
    button.href = buttonHref;

    const image = this.querySelector(".contact-invitation__image img");
    image.src = imageSrc;
    image.alt = imageAlt;
  }
}

if (!customElements.get("contact-invitation")) {
  customElements.define("contact-invitation", ContactInvitation);
}

if (!customElements.get("site-cta")) {
  customElements.define("site-cta", class extends ContactInvitation {});
}
