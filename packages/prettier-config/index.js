module.exports = {
  endOfLine: 'auto',
  // https://prettier.io/docs/en/options.html#print-width
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: ['*.html'],
      options: {
        // disable to prevent conflicts with html-validate
        trailingComma: 'none',
        // https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
        htmlWhitespaceSensitivity: 'css',
        singleAttributePerLine: true,
      },
    },
  ],
}
