# Jest Config

My personal shareable jest configuration.

## Install

```bash
pnpm add -D jest @ggascoigne/jest-config
```

## Usage

**`jest.config.js`**

```js
module.exports = {
  preset: '@ggascoigne/jest-config',
};
```

## Extending

An example with `testMatch` that Jest uses to detect test files.

**`jest.config.js`**

```js
module.exports = {
  preset: '@ggascoigne/jest-config',
  testMatch: [
    '<rootDir>/__tests__/**/**.+(ts|tsx|js|jsx)',
    '<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
};
```

## Add an NPM Script

Running this command:

```bash
npm set-script test "jest"
```

Will create:

**`package.json`**

```json
"scripts": {
  "test": "jest"
},
```

## Add a Pre-commit Hook

**Note**: Executes tests and coverage output related to files that have been changed in the current commit only.

**`lint-staged.config.js`**

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'pnpm test --bail --passWithNoTests --findRelatedTests --coverage',
  ],
};
```

## Under The Hood

### `jest-preset.js`

- `@types/jest`
- `ts-jest`
- `jest-environment-jsdom`
- `jest-transform-stub`

## License

MIT
