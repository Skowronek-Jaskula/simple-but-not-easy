"use strict";

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "selector-max-empty-lines": 1,
    "at-rule-empty-line-before": [
      "always",
      { except: ["after-same-name", "first-nested"] },
    ],
    "rule-empty-line-before": [
      "always",
      { except: ["inside-block", "first-nested"] },
      {
        ignore: [
          "after-comment",
          "first-nested",
          "inside-block",
          "blockless-after-same-name-blockless",
          "blockless-after-blockless",
        ],
      },
    ],
    "declaration-no-important": true,
    "order/properties-alphabetical-order": true,
    "selector-class-pattern":
      "([a-z]+)*(?:__[a-z]+(?:-[a-z]+)*)?(?:--[a-z]+(?:-[a-z]+)*)?(?:\\[.+\\])?",
    "scss/percent-placeholder-pattern":
      "([a-z]+)*(?:__[a-z]+(?:-[a-z]+)*)?(?:--[a-z]+(?:-[a-z]+)*)?(?:\\[.+\\])?",
    "scss/at-extend-no-missing-placeholder": null,
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class"],
      },
    ],
    "max-nesting-depth": [
      4,
      {
        ignore: ["pseudo-classes"],
      },
    ],
    "property-no-vendor-prefix": [
      true,
      {
        // disabled for `-webkit-appearance` to allow browser independent styling of inputs, buttons and other form elements
        // disabled for `-webkit-box-orient` to allow box-flex display: https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex
        ignoreProperties: ["appearance", "box-orient"],
      },
    ],

    "selector-no-vendor-prefix": [
      true,
      {
        // disabled for `-webkit-input-placeholder` to allow styling input placeholders
        ignoreSelectors: ["::-webkit-input-placeholder"],
      },
    ],
    "value-no-vendor-prefix": [
      true,
      {
        // disabled for `-webkit-box` to allow box-flex display: https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex
        ignoreValues: ["box"],
      },
    ],
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: ["/grid/"],
      },
    ],
  },
};
