module.exports = {
  // when changing this, remember that you can run
  // `pnpm eslint --print-config <filename>` to print
  // the existing used config for that path
  extends: ['./index.js'],
  overrides: [
    {
      files: '*.{ts,cts,mts,tsx}',
      extends: ['plugin:@typescript-eslint/recommended', 'airbnb-typescript/base', 'prettier'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-underscore-dangle': 'off',
        'import/extensions': 'off',
        // disabled because it conflicts with jsx-a11y/alt-text
        'jsx-a11y/img-redundant-alt': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
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
        // I like this one, but it's pretty slow
        '@typescript-eslint/prefer-optional-chain': 'off',
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
        // not currently working
        'etc/no-misused-generics': 'off',
        // disable this, it's is responsible for 30-40% of my lint time
        'etc/no-deprecated': 'off',
        // disable this rule and use unused-imports instead since it has a working fixer
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            // this is the airbnb setting with the exception that vars and args named with a leading _ are allowed
            // this allows for more convenient type documentation on callbacks
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_|^React$',
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          // Allow camelCase variables (23.2), PascalCase variables (23.8),
          // and UPPER_CASE variables (23.10)
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
          // Airbnb recommends PascalCase for classes (23.3), and although
          // Airbnb does not make TypeScript recommendations, we are assuming
          // this rule  would similarly apply to anything "type like",
          // including interfaces,  type aliases, and enums
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
      },
    },
  ],
}
