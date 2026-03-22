"use strict";

const RAW_COLOR_RE =
  /\b(text|bg|border|ring|shadow|fill|stroke)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]+(\/[0-9]+)?\b/;

const TOKEN_SUGGESTIONS = [
  "Suggested Zentrix semantic tokens:",
  "  text-gray-*    → text-text-primary, text-text-secondary, text-text-muted",
  "  bg-gray-*      → bg-surface-base, bg-surface-raised, bg-surface-card",
  "  border-gray-*  → border-border-default, border-border-subtle",
  "  text-blue-*    → text-accent",
  "  bg-blue-*      → bg-accent, bg-accent/10",
  "  text-red-*     → text-status-error",
  "  text-green-*   → text-status-success",
  "  text-yellow-*  → text-status-warning",
  "  bg-red-*       → bg-status-error",
  "  bg-green-*     → bg-status-success",
].join("\n");

const MESSAGE =
  "Use a Zentrix semantic token instead of raw Tailwind color scale. See DESIGN.md.\n" +
  TOKEN_SUGGESTIONS;

/**
 * Check a string for raw Tailwind color classes.
 */
function checkForRawColors(context, node, value) {
  if (typeof value !== "string") return;
  if (RAW_COLOR_RE.test(value)) {
    context.report({ node, message: MESSAGE });
  }
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow raw Tailwind color scale classes; use Zentrix semantic tokens instead",
    },
    schema: [],
  },

  create(context) {
    return {
      JSXAttribute(node) {
        const attrName =
          node.name && node.name.type === "JSXIdentifier" ? node.name.name : null;

        if (attrName !== "className") return;

        const value = node.value;
        if (!value) return;

        // className="..."
        if (value.type === "Literal" && typeof value.value === "string") {
          checkForRawColors(context, node, value.value);
        }

        // className={...}
        if (value.type === "JSXExpressionContainer") {
          const expr = value.expression;

          if (expr.type === "Literal" && typeof expr.value === "string") {
            checkForRawColors(context, node, expr.value);
          }

          if (expr.type === "TemplateLiteral") {
            for (const quasi of expr.quasis) {
              checkForRawColors(context, node, quasi.value.raw);
            }
          }
        }
      },
    };
  },
};
