module.exports = {
  plugins: ['prettier', 'unused-imports'],
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
    'no-duplicate-imports': 'off',
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
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
        warnOnUnassignedImports: true,
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
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
