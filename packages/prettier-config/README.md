# Prettier Config

My personal shareable prettier configuration.

## Install

```bash
pnpm add -D prettier @ggascoigne/prettier-config
```

## Usage

**`.prettierrc.js`**

```js
module.exports = '@ggascoigne/prettier-config'
```

## Extending

**`.prettierrc.js`**

```js
module.exports = {
  ...require('@ggascoigne/prettier-config'),
  semi: true,
}
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:prettier "prettier --write ."
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:prettier": "prettier --write ."
},
```

## Add a Pre-commit Hook

**`lint-staged.config.js`**

```js
module.exports = {
  '**/*': ['prettier --cache --write --ignore-unknown'],
}
```

## License

MIT
