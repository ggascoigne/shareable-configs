# Eslint Config

My personal shareable eslint configuration.

## Install

```bash
pnpm add -D eslint @ggascoigne/eslint-config
```

## Usage

**`.eslintrc.js`**

### JS

```js
module.exports = {
  extends: '@ggascoigne/eslint-config',
};
```

### TS

```js
module.exports = {
  extends: '@ggascoigne/eslint-config/ts',
};
```

### Jest

```js
module.exports = {
  extends: '@ggascoigne/eslint-config/jest',
};
```

## Extending

An example configuring a mixed JS/TS, `tsconfig`-compatible configuration with jest linting.

**`.eslintrc.js`**

```js
module.exports = {
  ignorePatterns: ['dist/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        '@ggascoigne/eslint-config/ts',
        '@ggascoigne/eslint-config/jest',
      ],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: ['**/*.js'],
      extends: ['@ggascoigne/eslint-config', '@ggascoigne/eslint-config/jest'],
    },
  ],
};
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:js "eslint --fix **/*.{js,jsx,ts,tsx}"
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:js": "eslint --fix **/*.{js,jsx,ts,tsx}"
},
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --cache --write', 'eslint --cache --fix'],
};
```

## Under The Hood

### `index.js`

- Plugins
  - `eslint-plugin-prettier`
- Parser
  - default `eslint` parser
- Extends
  - `eslint-plugin-unicorn`
  - `eslint-plugin-promise`
  - `eslint-plugin-sonarjs`
  - `eslint-plugin-security`,
  - default `eslint` ruleset
  - `eslint-config-airbnb-base`
  - `eslint-config-prettier`
- Rules
  - [Prettier Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)
  - Other rules can be found in the config

### `ts.js`

- Plugins
  - `@typescript-eslint/eslint-plugin`
  - `eslint-plugin-prettier`
- Parser
  - `@typescript-eslint/parser`
- Extends
  - `eslint-plugin-unicorn`
  - `eslint-plugin-promise`
  - `eslint-plugin-sonarjs`
  - `eslint-plugin-security`,
  - `@typescript-eslint/eslint-plugin`
  - `eslint-config-airbnb-typescript`
  - `eslint-config-prettier`
- Rules
  - [Prettier Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)
  - Other rules can be found in the config

### `jest.js`

- Plugins
  - `jest`
  - `jest-dom`
  - `jest-formatting`
- Extends
  - `plugin:jest/recommended`
  - `plugin:jest-dom/recommended`
  - `plugin:jest-formatting/recommended`

## License

MIT
