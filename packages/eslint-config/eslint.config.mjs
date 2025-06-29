// import tsParser from '@typescript-eslint/parser'
import eslintJs from '@eslint/js'
import restrictedGlobals from 'confusing-browser-globals'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import risxssPlugin from 'eslint-plugin-risxss'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import eslintTs from 'typescript-eslint'

const tsFiles = ['**/*.{ts,tsx,mts,cts,mtsx}']

const jsAndTsFiles = ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mts,cts,mtsx}']

const slowRules = {
  'import/named': ['error'],
  'import/no-cycle': [
    'error',
    {
      allowUnsafeDynamicCyclicDependency: false,
      ignoreExternal: false,
      maxDepth: '∞',
    },
  ],
  'import/no-named-as-default': ['error'],
  'import/no-named-as-default-member': ['error'],
  'import/no-unresolved': [
    'error',
    {
      caseSensitive: true,
      caseSensitiveStrict: false,
      commonjs: true,
    },
  ],
}

const baseRules = {
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
      allowVoid: false,
      checkForEach: false,
    },
  ],

  'arrow-body-style': [
    'warn',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  'block-scoped-var': ['error'],

  camelcase: [
    'error',
    {
      ignoreDestructuring: false,
      ignoreGlobals: false,
      ignoreImports: false,
      properties: 'never',
    },
  ],

  'class-methods-use-this': [
    'error',
    {
      enforceForClassFields: true,
      exceptMethods: [],
    },
  ],

  'consistent-return': ['error'],
  // 'constructor-super': ['error'],

  'default-case': [
    'error',
    {
      commentPattern: '^no default$',
    },
  ],

  'default-case-last': ['error'],
  'default-param-last': ['error'],

  'dot-notation': [
    'warn',
    {
      allowKeywords: true,
      allowPattern: '',
    },
  ],

  eqeqeq: ['warn', 'smart'],

  // 'for-direction': ['error'],
  'func-names': ['warn'],

  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],

  // "global-require": ["error"],
  'grouped-accessor-pairs': ['error'],
  'guard-for-in': ['error'],
  'import/export': ['error'],
  'import/first': ['error'],
  'import/newline-after-import': ['error'],
  'import/no-absolute-path': ['error'],
  'import/no-amd': ['error'],

  'import/no-duplicates': ['error'],
  'import/no-dynamic-require': ['error'],

  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
    },
  ],

  'import/no-import-module-exports': [
    'error',
    {
      exceptions: [],
    },
  ],

  'import/no-mutable-exports': ['error'],

  'import/no-named-default': ['error'],
  'import/no-relative-packages': ['error'],
  'import/no-self-import': ['error'],

  'import/no-useless-path-segments': [
    'error',
    {
      commonjs: true,
    },
  ],

  'import/no-webpack-loader-syntax': ['error'],

  'import/order': [
    'warn',
    {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc',
        orderImportKind: 'ignore',
      },

      distinctGroup: true,
      groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
      'newlines-between': 'always',

      pathGroups: [
        {
          group: 'external',
          pattern: 'react',
          position: 'before',
        },
      ],

      pathGroupsExcludedImportTypes: ['react'],
      warnOnUnassignedImports: true,
    },
  ],

  // "lines-around-directive": ["error", {
  //     after: "always",
  //     before: "always",
  // }],

  // "lines-between-class-members": ["error", "always", {
  //     exceptAfterSingleLine: false,
  // }],

  'max-classes-per-file': ['error', 1],

  // "max-len": ["error", {
  //     code: 120,
  //     ignoreUrls: true,
  // }],

  'new-cap': [
    'error',
    {
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      newIsCap: true,
      newIsCapExceptions: [],
      properties: true,
    },
  ],

  'no-alert': ['warn'],
  'no-array-constructor': ['error'],
  // 'no-async-promise-executor': ['error'],
  'no-await-in-loop': ['error'],
  'no-bitwise': ['error'],
  // "no-buffer-constructor": ["error"],
  'no-caller': ['error'],
  // 'no-case-declarations': ['error'],
  // 'no-class-assign': ['error'],
  // 'no-compare-neg-zero': ['error'],
  // 'no-cond-assign': ['error', 'always'],
  'no-console': ['warn'],
  // 'no-const-assign': ['error'],
  // 'no-constant-condition': ['warn'],
  'no-constructor-return': ['error'],
  'no-continue': ['error'],
  // 'no-control-regex': ['error'],
  // 'no-debugger': ['error'],
  // 'no-delete-var': ['error'],
  // 'no-dupe-args': ['error'],
  // 'no-dupe-class-members': ['error'],
  // 'no-dupe-else-if': ['error'],
  // 'no-dupe-keys': ['error'],
  // 'no-duplicate-case': ['error'],
  // 'no-empty': ['error'],
  // 'no-empty-character-class': ['error'],

  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // 'no-empty-pattern': ['error'],
  'no-eval': ['error'],
  // 'no-ex-assign': ['error'],
  'no-extend-native': ['error'],
  'no-extra-bind': ['error'],
  // 'no-extra-boolean-cast': ['error'],
  'no-extra-label': ['error'],
  // 'no-fallthrough': ['error'],
  // 'no-func-assign': ['error'],

  // 'no-global-assign': [
  //   'error',
  //   {
  //     exceptions: [],
  //   },
  // ],

  'no-implied-eval': ['error'],
  // 'no-import-assign': ['error'],
  'no-inner-declarations': ['error'],
  // 'no-invalid-regexp': ['error'],
  // 'no-irregular-whitespace': ['error'],
  'no-iterator': ['error'],
  'no-label-var': ['error'],

  'no-labels': [
    'error',
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],

  'no-lone-blocks': ['error'],
  'no-lonely-if': ['error'],
  'no-loop-func': ['error'],
  // 'no-loss-of-precision': ['error'],
  // 'no-misleading-character-class': ['error'],
  'no-multi-assign': ['error'],
  'no-multi-str': ['error'],
  'no-new': ['error'],
  'no-new-func': ['error'],
  // "no-new-object": ["error"],
  // "no-new-require": ["error"],
  // "no-new-symbol": ["error"],
  'no-new-wrappers': ['error'],
  // 'no-nonoctal-decimal-escape': ['error'],
  // 'no-obj-calls': ['error'],
  // 'no-octal': ['error'],
  'no-octal-escape': ['error'],

  'no-param-reassign': [
    'error',
    {
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response',
        '$scope',
        'staticContext',
      ],

      props: true,
    },
  ],

  // "no-path-concat": ["error"],

  // 'no-plusplus': [
  //   'error',
  //   {
  //     allowForLoopAfterthoughts: true,
  //   },
  // ],
  'no-plusplus': 'off',

  'no-promise-executor-return': ['error'],
  'no-proto': ['error'],
  // 'no-prototype-builtins': ['error'],
  // 'no-redeclare': ['error'],
  // 'no-regex-spaces': ['error'],

  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: ['default', 'then'],
    },
  ],

  'no-restricted-globals': [
    'error',
    {
      message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      name: 'isFinite',
    },
    {
      message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      name: 'isNaN',
    },
  ],

  'no-restricted-properties': [
    'error',
    {
      message: 'arguments.callee is deprecated',
      object: 'arguments',
      property: 'callee',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'global',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'self',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'window',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'global',
      property: 'isNaN',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'self',
      property: 'isNaN',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'window',
      property: 'isNaN',
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineGetter__',
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineSetter__',
    },
    {
      message: 'Use the exponentiation operator (**) instead.',
      object: 'Math',
      property: 'pow',
    },
  ],

  'no-restricted-syntax': [
    'error',
    {
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      selector: 'ForInStatement',
    },
    // {
    //   message:
    //     'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    //   selector: 'ForOfStatement',
    // },
    {
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      selector: 'LabeledStatement',
    },
    {
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      selector: 'WithStatement',
    },
  ],

  'no-return-assign': ['error', 'always'],
  // "no-return-await": ["error"],
  'no-script-url': ['error'],

  // 'no-self-assign': [
  //   'error',
  //   {
  //     props: true,
  //   },
  // ],

  'no-self-compare': ['error'],
  'no-sequences': ['error'],
  // 'no-setter-return': ['error'],
  'no-shadow': ['error'],
  // 'no-shadow-restricted-names': ['error'],
  // 'no-sparse-arrays': ['error'],
  'no-template-curly-in-string': ['error'],
  // 'no-this-before-super': ['error'],
  'no-throw-literal': ['error'],
  // 'no-undef': ['error'],
  'no-undef-init': ['error'],

  // 'no-underscore-dangle': [
  //   'error',
  //   {
  //     allow: [],
  //     allowAfterSuper: false,
  //     allowAfterThis: false,
  //     allowAfterThisConstructor: false,
  //     allowFunctionParams: true,
  //     allowInArrayDestructuring: true,
  //     allowInObjectDestructuring: true,
  //     enforceInClassFields: false,
  //     enforceInMethodNames: true,
  //   },
  // ],

  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false,
    },
  ],

  'no-unreachable': ['error'],

  'no-unreachable-loop': [
    'error',
    {
      ignore: [],
    },
  ],

  // 'no-unsafe-finally': ['error'],
  // 'no-unsafe-negation': ['error'],

  // 'no-unsafe-optional-chaining': [
  //   'error',
  //   {
  //     disallowArithmeticOperators: true,
  //   },
  // ],

  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: false,
    },
  ],

  // 'no-unused-labels': ['error'],
  // 'no-useless-backreference': ['error'],
  // 'no-useless-catch': ['error'],
  'no-useless-computed-key': ['error'],
  'no-useless-concat': ['error'],
  'no-useless-constructor': ['error'],
  // 'no-useless-escape': ['error'],

  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
    },
  ],

  'no-useless-return': ['error'],
  'no-var': ['error'],
  'no-void': ['error'],
  // 'no-with': ['error'],

  'object-shorthand': [
    'warn',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],

  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],

  'prefer-arrow-callback': [
    'warn',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  'prefer-const': [
    'warn',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: {
        array: true,
        object: false,
      },

      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  'prefer-exponentiation-operator': ['error'],
  'prefer-numeric-literals': ['error'],
  'prefer-object-spread': ['error'],

  'prefer-promise-reject-errors': [
    'error',
    {
      allowEmptyReject: true,
    },
  ],

  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  'prefer-rest-params': ['error'],
  'prefer-spread': ['error'],
  'prefer-template': ['error'],
  radix: ['error'],
  // 'require-yield': ['error'],

  // "spaced-comment": ["error", "always", {
  //     block: {
  //         balanced: true,
  //         exceptions: ["-", "+"],
  //         markers: ["=", "!", ":", "::"],
  //     },

  //     line: {
  //         exceptions: ["-", "+"],
  //         markers: ["=", "!", "/"],
  //     },
  // }],

  strict: ['error', 'never'],
  'symbol-description': ['error'],
  'unicode-bom': ['error', 'never'],
  // 'use-isnan': ['error'],

  // 'valid-typeof': [
  //   'error',
  //   {
  //     requireStringLiterals: true,
  //   },
  // ],

  'vars-on-top': ['error'],
  yoda: ['error'],
}

const jsxA11y = {
  'jsx-a11y/alt-text': ['warn'],
  'jsx-a11y/anchor-has-content': ['warn'],
  'jsx-a11y/anchor-is-valid': [
    'warn',
    {
      aspects: ['noHref', 'invalidHref'],
    },
  ],
  'jsx-a11y/aria-activedescendant-has-tabindex': ['warn'],
  'jsx-a11y/aria-props': ['warn'],
  'jsx-a11y/aria-proptypes': ['warn'],
  'jsx-a11y/aria-role': [
    'warn',
    {
      ignoreNonDOM: true,
    },
  ],
  'jsx-a11y/aria-unsupported-elements': ['warn'],
  'jsx-a11y/heading-has-content': ['warn'],
  'jsx-a11y/iframe-has-title': ['warn'],
  'jsx-a11y/img-redundant-alt': ['warn'],
  'jsx-a11y/no-access-key': ['warn'],
  'jsx-a11y/no-distracting-elements': ['warn'],
  'jsx-a11y/no-redundant-roles': ['warn'],
  'jsx-a11y/role-has-required-aria-props': ['warn'],
  'jsx-a11y/role-supports-aria-props': ['warn'],
  'jsx-a11y/scope': ['warn'],
}

const reactRules = {
  'import/no-anonymous-default-export': [
    'warn',
    {
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowArray: false,
      allowArrowFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],

  'react/no-danger': ['warn'],
  'react/display-name': 0,

  'no-array-constructor': ['warn'],
  'no-caller': ['warn'],
  'no-cond-assign': ['warn', 'except-parens'],
  'no-const-assign': ['warn'],
  'no-control-regex': ['warn'],
  'no-delete-var': ['warn'],
  'no-dupe-args': ['warn'],
  'no-dupe-class-members': ['warn'],
  'no-dupe-keys': ['warn'],
  'no-duplicate-case': ['warn'],
  'no-empty-character-class': ['warn'],
  'no-empty-pattern': ['warn'],
  'no-eval': ['warn'],
  'no-ex-assign': ['warn'],
  'no-extend-native': ['warn'],
  'no-extra-bind': ['warn'],
  'no-extra-label': ['warn'],
  'no-fallthrough': ['warn'],
  'no-func-assign': ['warn'],
  'no-global-assign': [
    'warn',
    {
      exceptions: [],
    },
  ],
  'no-implied-eval': ['warn'],
  'no-invalid-regexp': ['warn'],
  'no-iterator': ['warn'],
  'no-label-var': ['warn'],
  'no-labels': [
    'warn',
    {
      allowLoop: true,
      allowSwitch: false,
    },
  ],
  'no-lone-blocks': ['warn'],
  'no-loop-func': ['warn'],
  'no-multi-str': ['warn'],
  'no-new-func': ['warn'],
  // 'no-new-object': ['warn'],
  // 'no-new-symbol': ['warn'],
  'no-new-wrappers': ['warn'],
  'no-obj-calls': ['warn'],
  'no-octal': ['warn'],
  'no-octal-escape': ['warn'],
  'no-redeclare': ['warn'],
  'no-regex-spaces': ['warn'],
  'no-restricted-globals': ['error'].concat(restrictedGlobals),
  'no-restricted-properties': [
    'error',
    {
      message:
        'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      object: 'require',
      property: 'ensure',
    },
    {
      message:
        'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
      object: 'System',
      property: 'import',
    },
  ],
  'no-script-url': ['warn'],
  'no-self-assign': [
    'warn',
    {
      props: true,
    },
  ],
  'no-self-compare': ['warn'],
  'no-sequences': ['warn'],
  'no-shadow-restricted-names': ['warn'],
  'no-sparse-arrays': ['warn'],
  'no-template-curly-in-string': ['warn'],
  'no-this-before-super': ['warn'],
  'no-throw-literal': ['warn'],
  'no-unreachable': ['warn'],
  'no-unsafe-negation': ['warn'],
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: false,
    },
  ],
  'no-unused-labels': ['warn'],
  'no-unused-vars': [
    'warn',
    {
      args: 'none',
      ignoreRestSiblings: true,
    },
  ],
  'no-use-before-define': [
    'warn',
    {
      classes: false,
      functions: false,
      variables: false,
    },
  ],
  'no-useless-computed-key': ['warn'],
  'no-useless-concat': ['warn'],
  'no-useless-constructor': ['warn'],
  'no-useless-escape': ['warn'],
  'no-useless-rename': [
    'warn',
    {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
    },
  ],
  'no-with': ['warn'],

  'react-hooks/exhaustive-deps': ['warn'],
  'react-hooks/rules-of-hooks': ['error'],
  'react/prop-types': 0,

  'react/forbid-foreign-prop-types': [
    'warn',
    {
      allowInPropTypes: true,
    },
  ],
  'react/jsx-boolean-value': ['warn'],
  'react/jsx-curly-brace-presence': ['warn', 'never'],
  'react/jsx-fragments': ['warn'],
  'react/jsx-key': [
    'warn',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: false,
      warnOnDuplicates: false,
    },
  ],
  'react/jsx-no-comment-textnodes': ['warn'],
  'react/jsx-no-duplicate-props': ['warn'],
  'react/jsx-no-target-blank': ['warn'],
  // 'react/jsx-no-undef': ['error'],
  'react/jsx-pascal-case': [
    'warn',
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],
  'react/no-danger-with-children': ['warn'],
  'react/no-direct-mutation-state': ['warn'],
  'react/no-is-mounted': ['warn'],
  'react/no-typos': ['error'],
  // 'react/require-render-return': ['error'],
  'react/style-prop-object': ['warn'],

  'require-yield': ['warn'],
  'risxss/catch-potential-xss-react': ['error'],

  strict: ['warn', 'never'],
  'unicode-bom': ['warn', 'never'],
  'use-isnan': ['warn'],
  'valid-typeof': [
    'warn',
    {
      requireStringLiterals: true,
    },
  ],
}

const tsReactRules = {
  // disable a few rules from the recommended config that cause too many errors for us
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/array-type': 0,
  '@typescript-eslint/consistent-type-definitions': 0,
  '@typescript-eslint/ban-ts-comment': 0,
  camelcase: 0,

  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^_|^React$|^log$',
      argsIgnorePattern: '^_',
    },
  ],

  // '@typescript-eslint/ban-types': ['error'],
  '@typescript-eslint/consistent-type-assertions': ['warn'],
  '@typescript-eslint/default-param-last': ['error'],
  '@typescript-eslint/dot-notation': [
    'error',
    {
      allowIndexSignaturePropertyAccess: false,
      allowKeywords: true,
      allowPattern: '',
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ],
  // '@typescript-eslint/lines-between-class-members': [
  //   'error',
  //   'always',
  //   {
  //     exceptAfterOverload: true,
  //     exceptAfterSingleLine: false,
  //   },
  // ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      selector: 'variable',
    },
    {
      format: ['camelCase', 'PascalCase'],
      selector: 'function',
    },
    {
      format: ['PascalCase'],
      selector: 'typeLike',
    },
  ],
  '@typescript-eslint/no-array-constructor': ['error'],
  '@typescript-eslint/no-dupe-class-members': ['error'],
  '@typescript-eslint/no-duplicate-enum-values': ['error'],
  // '@typescript-eslint/no-empty-interface': [
  //   'error',
  //   {
  //     allowSingleExtends: true,
  //   },
  // ],
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-loop-func': ['error'],
  // '@typescript-eslint/no-loss-of-precision': ['error'],
  '@typescript-eslint/no-misused-new': ['error'],
  '@typescript-eslint/no-namespace': ['error'],
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
  '@typescript-eslint/no-redeclare': ['error'],
  '@typescript-eslint/no-shadow': ['error'],
  '@typescript-eslint/no-this-alias': ['error'],
  // '@typescript-eslint/no-throw-literal': ['error'],
  '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
  '@typescript-eslint/no-unsafe-declaration-merging': ['error'],
  '@typescript-eslint/no-unused-expressions': [
    'warn',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: false,
      allowTernary: true,
      enforceForJSX: false,
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'warn',
    {
      classes: true,
      functions: true,
      variables: true,
    },
  ],
  '@typescript-eslint/no-useless-constructor': ['error'],
  // '@typescript-eslint/no-var-requires': ['error'],
  '@typescript-eslint/prefer-as-const': ['error'],
  '@typescript-eslint/prefer-nullish-coalescing': [
    'warn',
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
    },
  ],
  '@typescript-eslint/prefer-regexp-exec': ['warn'],
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  '@typescript-eslint/triple-slash-reference': ['error'],
}

export const eslintTsConfigs = [
  ...eslintTs.configs.recommended.map(config => ({
    ...config,
    files: tsFiles,
  })),
  ...eslintTs.configs.stylistic.map(config => ({
    ...config,
    files: tsFiles,
  })),
  {
    rules: {
      'no-shadow': 'off',
    },
  },
]

export const baseTypescript = [
  {
    name: '@ggascoigne/eslint-config/base-typescript-lang',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: '@ggascoigne/eslint-config/base-typescript-config',
    files: tsFiles,
    rules: {
      ...tsReactRules,
    },
  },
]

export const configs = {
  globalIgnores: [
    {
      name: '@ggascoigne/eslint-config/global-ignores',
      ignores: ['docs/*', 'build/*', 'lib/*', 'dist/*'],
    },
  ],
  slow: [
    {
      name: '@ggascoigne/eslint-config/slow-rules',
      plugins: {
        import: importPlugin,
      },

      rules: {
        ...slowRules,
      },
    },
  ],
  recommendedJs: [
    {
      name: '@eslint/js/recommended',
      ...eslintJs.configs.recommended,
    },
    {
      name: '@ggascoigne/eslint-config/base-javascript-config',
      plugins: {
        import: importPlugin,
        'unused-imports': unusedImports,
      },

      rules: {
        ...baseRules,
      },
    },
  ],
  officialReact: [
    {
      name: 'eslint-plugin-react/recommended',
      files: jsAndTsFiles,
      ...reactPlugin.configs.flat.recommended,
      settings: {
        react: {
          version: 'detect', // or specify a version like '18.2.0'
        },
      },
    },
    {
      name: 'eslint-plugin-react/jsx-runtime',
      files: jsAndTsFiles,
      ...reactPlugin.configs.flat['jsx-runtime'],
    },
    {
      name: 'globals / browser & service worker',
      files: jsAndTsFiles,
      languageOptions: {
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
          process: false,
        },
      },
    },
  ],
  react: [
    {
      name: '@ggascoigne/eslint-config/react-config',
      plugins: {
        import: importPlugin,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        risxss: risxssPlugin,
      },

      rules: {
        ...reactRules,
      },
    },
    {
      name: '@ggascoigne/eslint-config/jsx-a11y',
      plugins: {
        'jsx-a11y': jsxA11yPlugin,
      },

      rules: {
        ...jsxA11y,
      },
    },
  ],
  baseTypescript,
  recommendedTs: [...eslintTsConfigs, ...baseTypescript],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  ...configs.globalIgnores,
  ...configs.recommendedJs,
  ...configs.officialReact,
  ...configs.react,
  ...configs.recommendedTs,
]
