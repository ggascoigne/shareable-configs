# Stylelint Config

My personal shareable stylelint configuration.

## Install

```bash
pnpm add -D stylelint @ggascoigne/stylelint-config
```

## Usage

**`.stylelintrc.js`**

### CSS

```js
module.exports = {
  extends: '@ggascoigne/stylelint-config',
};
```

### SCSS

```js
module.exports = {
  extends: '@ggascoigne/stylelint-config/scss',
};
```

## Extending

An example configuring a mixed CSS/SCSS configuration.

**`.stylelintrc.js`**

```js
module.exports = {
  ignoreFiles: ['dist/**'],
  extends: '@ggascoigne/stylelint-config/scss',
  overrides: [
    {
      files: ['**/*.css'],
      extends: '@ggascoigne/stylelint-config',
    },
  ],
};
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:css "stylelint --fix **/*.{css,scss}"
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:css": "stylelint --fix **/*.{css,scss}"
},
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
  '*.{css,scss}': ['prettier --cache --write', 'stylelint --cache --fix'],
};
```

## Under The Hood

### `index.js`

- Plugins
  - `stylelint-order`
  - `stylelint-no-unsupported-browser-features`
  - `stylelint-high-performance-animation`
- Extends
  - `stylelint-config-standard`
  - `stylelint-a11y`
  - `stylelint-prettier`

### `scss.js`

- Plugins
  - `stylelint-order`
  - `stylelint-no-unsupported-browser-features`
  - `stylelint-high-performance-animation`
- Extends
  - `stylelint-config-standard-scss`
  - `stylelint-config-sass-guidelines`
  - `stylelint-a11y`
  - `stylelint-prettier`

## License

MIT
