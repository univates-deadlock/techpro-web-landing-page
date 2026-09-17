---
applyTo: "**/*.css"
---

Follow the CSS conventions defined in `AGENTS.md`.

During code review:

- Enforce BEM naming: `.block`, `.block__element`, `.block--modifier`.
- Use `.is-*` classes for transient JavaScript state.
- Prefer existing variables from `css/variables.css`.
- Flag duplicated component styles.
- Shared component styles belong in `css/components/`.
- Page-specific composition belongs in `css/pages/`.
- Prefer existing breakpoints: 1280px, 890px, and 600px.
- Flag new breakpoints when an existing one can solve the layout.
- Avoid unnecessarily specific selectors.
- Flag unnecessary `!important`.
- Prefer existing tokens over repeated literal design values.
- Do not request refactors unrelated to the pull request.
