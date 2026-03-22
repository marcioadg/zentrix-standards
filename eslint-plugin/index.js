"use strict";

const noHardcodedColors = require("./rules/no-hardcoded-colors");
const noRawTailwindColors = require("./rules/no-raw-tailwind-colors");
const noInvalidFontWeight = require("./rules/no-invalid-font-weight");

module.exports = {
  rules: {
    "no-hardcoded-colors": noHardcodedColors,
    "no-raw-tailwind-colors": noRawTailwindColors,
    "no-invalid-font-weight": noInvalidFontWeight,
  },
  configs: {
    recommended: {
      plugins: ["@zentrix/design-system"],
      rules: {
        "@zentrix/design-system/no-hardcoded-colors": "warn",
        "@zentrix/design-system/no-raw-tailwind-colors": "warn",
        "@zentrix/design-system/no-invalid-font-weight": "warn",
      },
    },
    strict: {
      plugins: ["@zentrix/design-system"],
      rules: {
        "@zentrix/design-system/no-hardcoded-colors": "error",
        "@zentrix/design-system/no-raw-tailwind-colors": "error",
        "@zentrix/design-system/no-invalid-font-weight": "error",
      },
    },
  },
};
