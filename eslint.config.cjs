module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/vue3-essential"],
  rules: {
    semi: [0],
    indent: "off",
    "vue/script-indent": [
      "error",
      2, //缩进类型
      {
        baseIndent: 0, //顶级语句的缩进
        switchCase: 0,
        ignores: [],
      },
    ],
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false,
      },
    ],
    "vue/multi-word-component-names": ["off"],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
