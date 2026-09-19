class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header__container">
        
          <!-- Brand Logo / Home Link -->
          <a href="/" class="header__brand" aria-label="TechPro - Página Inicial">
            <img
              src="/assets/images/common/techpro-logo.png"
              alt="Logotipo da TechPro"
              class="header__logo"
            />
          </a>

          <!-- Main Navigation Menu -->
          <div class="header__menu-wrapper">
            <nav class="header__nav" aria-label="Navegação principal">
              <!-- Close Button inside Sidebar -->
              <button class="header__close-btn" aria-label="Fechar menu">
                <img
                  src="/assets/icons/blue-x.svg"
                  alt="Fechar menu"
                  class="header__close-icon"
                />
              </button>

              <ul class="header__list">
                <li class="header__item">
                  <a class="header__link" href="/">Home</a>
                </li>
                <li class="header__item">
                  <a class="header__link" href="/pages/services.html">Serviços</a>
                </li>
                <li class="header__item">
                  <a class="header__link" href="/pages/customers.html">Clientes</a>
                </li>
                <li class="header__item">
                  <a class="header__link" href="/pages/institutional.html">
                    Institucional
                  </a>
                </li>
                <li class="header__item">
                  <a class="header__link" href="/pages/contact.html">Contato</a>
                </li>
              </ul>

              <!-- Call to Action Button -->
              <a class="header__button btn btn--primary" href="/pages/contact.html">
                Solicitar orçamento
              </a>
            </nav>
          </div>

          <!-- Hamburger Button for smaller screens -->
          <button class="header__hamburguer" aria-label="Abrir menu">
            <img
              src="/assets/icons/blue-hamburguer.svg"
              alt="Ícone de menu"
              class="header__hamburguer-icon"
            />
          </button>
        </div>
      </header>
    `;

    // Menu elements for modal on smaller screens
    const hamburguerBtn = this.querySelector(".header__hamburguer");
    const menuWrapper = this.querySelector(".header__menu-wrapper");
    const closeBtn = this.querySelector(".header__close-btn");

    // Open sidebar on hamburger click
    hamburguerBtn.addEventListener("click", () => {
      menuWrapper.classList.add("is-open");
    });

    // Close sidebar on 'X' button click
    closeBtn.addEventListener("click", () => {
      menuWrapper.classList.remove("is-open");
    });

    // Close sidebar when clicking outside (on the dark backdrop overlay)
    menuWrapper.addEventListener("click", (event) => {
      if (event.target === menuWrapper) {
        menuWrapper.classList.remove("is-open");
      }
    });
  }
}

customElements.define("site-header", SiteHeader);
