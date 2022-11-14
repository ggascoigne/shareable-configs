# Husky Setup

## Install

```bash
pnpm add -D husky
```

## Add an NPM Script

Running this command:

```bash
npm set-script prepare "husky install"
```

Will create:

**`package.json`**

```json
"scripts": {
  "prepare": "husky install"
},
```

## Run Husky

```bash
pnpm prepare
```
