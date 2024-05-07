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
};
