"use strict";

const { join } = require("node:path");

module.exports = {
  root: true,
  extends: "phanective/node",

  env: {
    node: true,
  },
  parserOptions: {
    project: join(__dirname, "./tsconfig.json"),
  },
  overrides: [
    {
      files: [ "tsconfig/**/tsconfig.*.json" ],
      extends: "plugin:jsonc/recommended-with-jsonc",
      rules: {
        "jsonc/comma-dangle": [ "error", {
          arrays: "always-multiline",
          objects: "always-multiline",
        }],
        "jsonc/no-comments": "off",
      },
    },
  ],
};
