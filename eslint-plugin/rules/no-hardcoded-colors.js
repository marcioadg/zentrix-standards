"use strict";

const HEX_COLOR_RE = /#[0-9a-fA-F]{3,8}\b/g;

const TOKEN_SUGGESTIONS = [
  "Common replacements:",
  "  #ffffff / #fff  → var(--color-surface-base) or bg-surface-base",
  "  #000000 / #000  → var(--color-text-primary) or text-text-primary",
  "  #f3f4f6 / gray-100 tones → var(--color-surface-raised) or bg-surface-raised",
  "  #3b82f6 / blue tones → var(--color-accent) or text-accent",
  "  #ef4444 / red tones → var(--color-status-error) or text-status-error",
  "  #22c55e / green tones → var(--color-status-success) or text-status-success",
  "  #eab308 / yellow tones → var(--color-status-warning) or text-status-warning",
].join("\n");

const MESSAGE =
  "Use a Zentrix design token (CSS variable) instead of hardcoded hex. See DESIGN.md.\n" +
  TOKEN_SUGGESTIONS;

/**
 * Check a string value for hardcoded hex colors and report them.
 */
function checkStringForHex(context, node, value) {
  if (typeof value !== "string") return;
  const matches = value.match(HEX_COLOR_RE);
  if (matches) {
    context.report({ node, message: MESSAGE });
  }
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow hardcoded hex color values; use Zentrix design tokens instead",
    },
    schema: [],
  },

  create(context) {
    return {
      JSXAttribute(node) {
        const attrName =
          node.name && node.name.type === "JSXIdentifier" ? node.name.name : null;

        // --- className ---
        if (attrName === "className") {
          const value = node.value;
          if (!value) return;

          // className="..."
          if (value.type === "Literal" && typeof value.value === "string") {
            checkStringForHex(context, node, value.value);
          }

          // className={`...`} or className={"..."}
          if (value.type === "JSXExpressionContainer") {
            const expr = value.expression;
            if (expr.type === "Literal" && typeof expr.value === "string") {
              checkStringForHex(context, node, expr.value);
            }
            if (expr.type === "TemplateLiteral") {
              for (const quasi of expr.quasis) {
                checkStringForHex(context, node, quasi.value.raw);
              }
            }
          }
        }

        // --- style ---
        if (attrName === "style" && node.value) {
          const container = node.value;
          if (container.type !== "JSXExpressionContainer") return;
          const expr = container.expression;
          if (expr.type !== "ObjectExpression") return;

          for (const prop of expr.properties) {
            if (
              prop.value &&
              prop.value.type === "Literal" &&
              typeof prop.value.value === "string"
            ) {
              checkStringForHex(context, prop.value, prop.value.value);
            }
          }
        }
      },
    };
  },
};
