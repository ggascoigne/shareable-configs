module.exports = {
  plugins: ['risxss', 'etc', '@typescript-eslint'],
  // when changing this, remember that you can run
  // `pnpm eslint --print-config <filename>` to print
  // the existing used config for that path
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
    // now disable all the rules that are in conflict with prettier
    'prettier',
    // note that we don't add the prettier rules, they add noise to the IDE
    // and the code is all being formatted on commit anyway.,
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'arrow-body-style': 'warn',
    'dot-notation': 'warn',
    'no-var': 'error',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    // enforce consistent jsx attributes
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    'risxss/catch-potential-xss-react': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        // this is the airbnb setting with the exception that vars and args
        // named with a leading _ are allowed
        // this allows for more convenient type documentation on callbacks
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_|knex',
        argsIgnorePattern: '^_|knex',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and
      // UPPER_CASE variables (23.10)
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb
      // does not make TypeScript recommendations, we are assuming this rule
      // would similarly apply to anything "type like", including interfaces,
      // type aliases, and enums
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  overrides: [
    {
      files: '*.{js,jsx}',
      rules: {
        // opinion: this is reasonable to disable
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: '*.{ts,tsx}',
      rules: {
        // disabled because it conflicts with jsx-a11y/alt-text
        'jsx-a11y/img-redundant-alt': 'off',
        // changed to match the default tsconfig
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': [
          'warn',
          {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
          },
        ],
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/no-unused-expressions': [
          'warn',
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        'etc/no-assign-mutated-array': 'error',
        'etc/no-internal': 'error',
        'etc/no-misused-generics': 'warn',
        'etc/no-deprecated': 'warn',
      },
    },
  ],
};
