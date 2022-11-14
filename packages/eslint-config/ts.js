module.exports = {
  // when changing this, remember that you can run
  // `pnpm eslint --print-config <filename>` to print
  // the existing used config for that path
  extends: ['./index.js'],
  overrides: [
    {
      files: '*.{ts,tsx}',
      extends: ['plugin:@typescript-eslint/recommended', 'airbnb-typescript/base', 'prettier'],
      parser: '@typescript-eslint/parser',
      rules: {
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
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            // this is the airbnb setting with the exception that vars
            // and args named with a leading _ are allowed
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
