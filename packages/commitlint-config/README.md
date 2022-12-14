# Commitlint Config

My personal shareable commitlint configuration.

## Install

```bash
pnpm pnpm -D @commitlint/cli @ggascoigne/commitlint-config
```

## Usage

**`commitlint.config.js`**

```js
module.exports = {
  extends: ['@ggascoigne/commitlint-config'],
};
```

## Extending

**`commitlint.config.js`**

```js
module.exports = {
  extends: ['@ggascoigne/commitlint-config'],
  rules: {
    'body-leading-blank': [2, 'always'],
  },
};
```

## Add a Husky Hook

Install husky:

```bash
pnpm add -D husky && npm set-script prepare "husky install" && pnpm prepare
```

Add the hook:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit'
```

## Under The Hood

### `index.js`

- `@commitlint/config-conventional`

## License

MIT
