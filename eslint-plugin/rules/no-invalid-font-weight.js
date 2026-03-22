"use strict";

const FORBIDDEN_WEIGHTS_RE = /\bfont-(black|extralight|thin|light)\b/;

const MESSAGE =
  "Font weight exceeds Zentrix max (600/semibold). Use font-semibold or lower. " +
  "Allowed: font-normal (400), font-medium (500), font-semibold (600).";

function checkForForbiddenWeights(context, node, value) {
  if (typeof value !== "string") return;
  if (FORBIDDEN_WEIGHTS_RE.test(value)) {
    context.report({ node, message: MESSAGE });
  }
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow font weights outside Zentrix range (max semibold/600)",
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
          checkForForbiddenWeights(context, node, value.value);
        }

        // className={...}
        if (value.type === "JSXExpressionContainer") {
          const expr = value.expression;

          if (expr.type === "Literal" && typeof expr.value === "string") {
            checkForForbiddenWeights(context, node, expr.value);
          }

          if (expr.type === "TemplateLiteral") {
            for (const quasi of expr.quasis) {
              checkForForbiddenWeights(context, node, quasi.value.raw);
            }
          }
        }
      },
    };
  },
};
