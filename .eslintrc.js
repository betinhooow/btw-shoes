module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    jest: true
  },
  plugins: ["react", "jsx-a11y", "import"],
  extends: "airbnb",
  quotes: [2, "single", "avoid-escape"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }]
  }
};
