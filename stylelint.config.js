"use strict";

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    "rule-empty-line-before": "always",
    "declaration-no-important": true,
    "order/properties-alphabetical-order": true,
    "selector-class-pattern":
      "([a-z]+)*(?:__[a-z]+(?:-[a-z]+)*)?(?:--[a-z]+(?:-[a-z]+)*)?(?:\\[.+\\])?",
    // "scss/percent-placeholder-pattern":
    //   "([a-z]+)*(?:__[a-z]+(?:-[a-z]+)*)?(?:--[a-z]+(?:-[a-z]+)*)?(?:\\[.+\\])?",
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class"],
      },
    ],
  },
};
