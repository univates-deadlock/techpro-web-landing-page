# TechPro Web Landing Page

## Stack

- HTML
- CSS
- Vanilla JavaScript
- Native Web Components

Do not introduce frameworks or build tooling unless explicitly requested.

## Required Skill

For frontend work, read:

`.agents/skills/developing-vanilla-web-interfaces/SKILL.md`

Project rules in this file take precedence over generic skill guidance.

## Project Structure

- `css/variables.css` → design tokens
- `css/global.css` → global styles and utilities
- `css/components/` → reusable components
- `css/pages/` → page-specific styles
- `js/components/` → reusable Web Components
- `js/main.js` → application initialization
- `pages/` → secondary HTML pages

## CSS Conventions

Use BEM:

- `.block`
- `.block__element`
- `.block--modifier`

Use `.is-*` for transient JavaScript state:

- `.is-open`
- `.is-active`
- `.is-hidden`

Prefer variables from `css/variables.css` instead of hard-coded design values.

Do not duplicate component styles inside page stylesheets.

## Components

Before creating a component:

1. Check whether an equivalent already exists.
2. Reuse existing tokens and patterns.
3. Put reusable styles in `css/components/`.
4. Put reusable JavaScript components in `js/components/`.

Existing global components include:

- `site-header`
- `site-footer`
- shared buttons

## Responsive Design

Follow existing responsive conventions.

Current primary breakpoints:

- `1280px`
- `890px`
- `600px`

Do not add new breakpoints without a layout-specific reason.

## Content

User-facing content should be written in Brazilian Portuguese.

Code identifiers, filenames, branches, and commit messages must be in English.

## Git

Use Conventional Commits.

Examples:

- `feat: add services section`
- `fix: correct mobile navigation`
- `refactor: extract reusable card styles`
- `chore: update agent skills`

Branch names:

- `feat/services-page`
- `fix/mobile-navigation`
- `refactor/header-component`
- `chore/add-agent-skills`

Use lowercase English names with hyphen-separated words.

## Scope

Do not refactor unrelated code while implementing a task.

Preserve existing architecture and browser-native implementation unless the task explicitly requires otherwise.

## Before Finishing

Verify:

- desktop, tablet, and mobile behavior
- no browser console errors
- existing components and tokens were reused where appropriate
- no unnecessary dependency was introduced
- accessibility and semantic HTML follow the installed frontend skill
