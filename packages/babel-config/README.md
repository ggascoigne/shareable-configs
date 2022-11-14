# DEPRECATED - Babel Config

~~My personal shareable babel configuration.~~

**Why?** - Alternatives to babel such as esbuild offer better performance for my projects.

## Install

```bash
pnpm add -D @babel/cli @babel/core @ggascoigne/babel-config
```

## Usage

**`babel.config.js`**

```js
module.exports = {
  extends: ['@ggascoigne/babel-config'],
};
```

## Extending

**`babel.config.js`**

```js
module.exports = {
  extends: ['@ggascoigne/babel-config'],
  presets: ['@babel/preset-typescript'],
};
```

## Under The Hood

### `index.js`

- `@babel/plugin-transform-runtime`
- `@babel/preset-env`
- `@babel/runtime`
- `core-js`

## License

MIT
