# TechPro Copilot Instructions

Follow the repository conventions defined in `AGENTS.md`.

When reviewing pull requests, prioritize defects and regressions over subjective
style preferences.

## Review priorities

Check changes for:

1. Functional bugs and regressions.
2. Broken navigation, links, forms, or interactive behavior.
3. Accessibility regressions.
4. Incorrect or non-semantic HTML.
5. Responsive layout regressions.
6. Violations of the existing CSS architecture.
7. Duplicated components, styles, or JavaScript behavior.
8. Unnecessary hard-coded design values when an existing token should be used.
9. BEM naming inconsistencies.
10. Unnecessary dependencies, frameworks, or abstractions.

## Architecture

Preserve the existing framework-free architecture:

- HTML
- CSS
- Vanilla JavaScript
- Native Web Components

Do not recommend introducing a framework, package manager, build system,
CSS framework, or third-party dependency unless the pull request explicitly
requires it.

Prefer the smallest change that solves the issue.

Do not recommend unrelated refactors.

## Existing code

Before suggesting a new component, utility, token, breakpoint, or abstraction,
consider whether an equivalent already exists in the repository.

Shared behavior and presentation should reuse existing components whenever
possible.

Page-specific behavior should remain page-specific when there is no meaningful
reuse case.

## Review severity

Treat these as significant issues:

- behavior that can break for users;
- accessibility regressions;
- invalid or misleading semantic HTML;
- duplicated reusable functionality;
- violations that make shared components inconsistent;
- changes that break responsive layouts;
- introduction of unnecessary dependencies;
- JavaScript errors or fragile state handling.

Do not report purely subjective visual preferences as defects.

Do not request changes solely because an alternative implementation is also
valid.

## Scope

Review the changes introduced by the pull request.

Mention pre-existing problems only when the pull request makes them worse or
directly depends on them.
