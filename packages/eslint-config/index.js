module.exports = {
  // note that this is somewhat react specific, if you don't want to use react, then use
  // @ggascoinge/eslint-config/base instead
  plugins: ['risxss', 'etc'],
  // when changing this, remember that you can run
  // `pnpm eslint --print-config <filename>` to print
  // the existing used config for that path
  extends: [
    './base.js',
    './react.js',
    // now disable all the rules that are in conflict with prettier
    'prettier',
    // note that we don't add the prettier rules, they add noise to the IDE
    // and the code is all being formatted on commit anyway.,
  ],
  rules: {
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    'risxss/catch-potential-xss-react': 'error',
  },
}
