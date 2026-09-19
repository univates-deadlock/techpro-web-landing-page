---
applyTo: "**/*.js"
---

During code review:

- Keep JavaScript focused on behavior and state.
- Prefer existing Native Web Components for reusable behavior.
- Avoid global mutable state when practical.
- Scope DOM queries and event listeners appropriately.
- Preserve keyboard behavior and focus management.
- Flag duplicated behavior that should reuse an existing component.
- Do not recommend libraries for behavior that is already simple to implement
  with the project's existing Vanilla JavaScript architecture.
