"use strict";

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    "rule-empty-line-before": "always",
    "declaration-no-important": true,
    "order/properties-alphabetical-order": true,
  },
};
