# zentrix-standards

**The single source of truth for all design and UI decisions across the Zentrix ecosystem.**

## What's in here

- [`DESIGN.md`](./DESIGN.md) — The Design Bible. Every color, spacing value, component spec, icon choice, animation rule, and layout decision for all Zentrix products.

## Who uses this

All Zentrix repos:
- `business-os`
- `zentrix-insights`
- `zentrixcrm`
- `zentrixmail`

## Rules

1. **Before building any UI** — read `DESIGN.md`.
2. **If something isn't in `DESIGN.md`** — don't make it up. Open a PR to add it here first.
3. **Tokens over raw values** — always use CSS variables / Tailwind tokens, never hardcode hex.
4. **Dark theme is default** — build dark first, light second.

## For coding agents

If you're a coding agent working on any Zentrix repo, the raw URL for the Design Bible is:

```
https://raw.githubusercontent.com/zentrix/zentrix-standards/main/DESIGN.md
```

Read it before touching any UI code.

## Updating the Bible

1. Make changes in a PR — never push directly to `main` for design spec changes.
2. All changes need a brief note in the PR description explaining why the spec was updated.
3. Tag `@marcio` for review on any color or component spec changes.
