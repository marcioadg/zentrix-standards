# @zentrix/eslint-plugin-design-system

ESLint rules to enforce Zentrix Design System compliance across all Zentrix repositories.

## Rules

| Rule | Description |
|------|-------------|
| `no-hardcoded-colors` | Flags hardcoded hex color values in JSX className and style props |
| `no-raw-tailwind-colors` | Flags raw Tailwind color scale classes (e.g. `bg-gray-500`) |
| `no-invalid-font-weight` | Flags font weights exceeding semibold (600) |

## Installation

Since this plugin lives in the `zentrix-standards` repo, install it via a relative path or git URL:

```bash
# From a sibling repo (e.g. zentrixcrm)
npm install --save-dev ../zentrix-standards/eslint-plugin

# Or via git
npm install --save-dev git+https://github.com/ZentrixLab/zentrix-standards.git#main:eslint-plugin
```

## Configuration

### Legacy config (`.eslintrc.js`)

```js
module.exports = {
  plugins: ["@zentrix/design-system"],
  rules: {
    "@zentrix/design-system/no-hardcoded-colors": "warn",
    "@zentrix/design-system/no-raw-tailwind-colors": "warn",
    "@zentrix/design-system/no-invalid-font-weight": "warn",
  },
};
```

Or use a preset:

```js
module.exports = {
  extends: ["plugin:@zentrix/design-system/recommended"], // "warn" level
  // or
  extends: ["plugin:@zentrix/design-system/strict"],       // "error" level
};
```

### Flat config (`eslint.config.js`)

```js
const zentrixDesignSystem = require("@zentrix/eslint-plugin-design-system");

module.exports = [
  {
    plugins: {
      "@zentrix/design-system": zentrixDesignSystem,
    },
    rules: {
      "@zentrix/design-system/no-hardcoded-colors": "warn",
      "@zentrix/design-system/no-raw-tailwind-colors": "warn",
      "@zentrix/design-system/no-invalid-font-weight": "warn",
    },
  },
];
```

## Notes

- Rules target JSXAttribute nodes — they only fire in `.jsx` / `.tsx` files parsed with a JSX-capable parser.
- Ensure your ESLint config uses `@typescript-eslint/parser` or `@babel/eslint-parser` with JSX enabled.
- See `DESIGN.md` in zentrix-standards for the full token reference.
