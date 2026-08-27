class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header__container">
          <a href="/" class="header__brand">
            <img
              src="./assets/images/logo/techpro-logo.png"
              alt="Logotipo da TechPro"
              class="header__logo"
            />
          </a>

          <nav class="header__nav" aria-label="Navegação principal">
            <ul class="header__list">
              <li class="header__item">
                <a class="header__link" href="/">Home</a>
              </li>

              <li class="header__item">
                <a class="header__link" href="/pages/services.html">
                  Serviços
                </a>
              </li>

              <li class="header__item">
                <a class="header__link" href="/pages/customers.html">
                  Clientes
                </a>
              </li>

              <li class="header__item">
                <a class="header__link" href="/pages/institutional.html">
                  Institucional
                </a>
              </li>

              <li class="header__item">
                <a class="header__link" href="/pages/contact.html">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <a class="header__button" href="/pages/contact.html">
            Solicitar orçamento
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
