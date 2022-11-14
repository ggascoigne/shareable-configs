# Secretlint Config

My personal shareable secretlint configuration.

## Install

```bash
pnpm add -D secretlint @ggascoigne/secretlint-config
```

## Usage

**`.secretlintrc.js`**

```js
module.exports = {
  ...require('@ggascoigne/secretlint-config'),
};
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:secrets "npx secretlint **/*"
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:secrets": "npx secretlint **/*"
},
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
  '*': ['secretlint'],
};
```

## Under The Hood

### `index.json`

- `@secretlint/secretlint-rule-preset-recommend`

## License

MIT
