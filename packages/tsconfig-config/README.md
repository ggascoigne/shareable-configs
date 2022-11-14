# Tsconfig Config

My personal shareable tsconfig configuration.

## Install

```bash
pnpm add -D @ggascoigne/tsconfig-config
```

## Usage

**`tsconfig.json`**

```json
{
  "extends": "@ggascoigne/tsconfig-config"
}
```

## Extending

A basic configuration for projects:

**`tsconfig.json`**

```json
{
  "extends": "@ggascoigne/tsconfig-config",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*", "__tests__/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## License

MIT
