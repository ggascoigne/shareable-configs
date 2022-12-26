module.exports = {
  plugins: ['prettier', '@getify/proper-ternary'],
  // when changing this, remember that you can run
  // `pnpm eslint --print-config <filename>` to print
  // the existing used config for that path
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    // note that we don't add the prettier rules, they add noise to the IDE
    // and the code is all being formatted on commit anyway.,
  ],
  rules: {
    'arrow-body-style': 'warn',
    'dot-notation': 'warn',
    'no-var': 'error',
    'no-debugger': 'error',
    'import/no-duplicates': 'error',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-else-return': 'off',
    'no-unused-vars': 'off',
    'no-nested-ternary': 'off',
    '@getify/proper-ternary/nested': ['error', { else: true, depth: 3 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
      },
    ],
  },
}
