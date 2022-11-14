# Htmlhint Config

My personal shareable htmlhint configuration.

## Install

```bash
pnpm add -D htmlhint @ggascoigne/htmlhint-config
```

## Add an NPM Script

Running this command:

```bash
npm set-script lint:html "htmlhint --config ./node_modules/@ggascoigne/htmlhint-config/index.json **/*.html"
```

Will create:

**`package.json`**

```json
"scripts": {
  "lint:html": "htmlhint --config ./node_modules/@ggascoigne/htmlhint-config/index.json **/*.html"
},
```

## License

MIT
