# Shareable Configs

My personal shareable configurations with fully automated package publishing to the `NPM` Registry.

## Forked from

Note that this is forked from https://github.com/waldronmatt/shareable-configs and then tweaked to suit my preferences, all credit to @waldronmatt for such a cool setup.

## Features

- Automated publishing to the `NPM` Registry for changed packages
- Automated `CHANGELOG.md` generation and `GitHub` releases using conventional commits
- Automated merging of `Dependabot` pull requests of dependency updates.

## Usage

### Installation

Install all configs and associated packages as development dependencies (**excludes** Webpack):

```bash
pnpm add -D @ggascoigne/browserslist-config @commitlint/cli @ggascoigne/commitlint-config eslint @ggascoigne/eslint-config htmlhint @ggascoigne/htmlhint-config jest @ggascoigne/jest-config lint-staged @ggascoigne/lint-staged-config markdownlint @ggascoigne/markdownlint-config postcss @ggascoigne/postcss-config prettier @ggascoigne/prettier-config secretlint @ggascoigne/secretlint-config semantic-release @ggascoigne/semantic-release-config stylelint @ggascoigne/stylelint-config @ggascoigne/tsconfig-config
```

### Set up Husky

Follow the directions [found here](https://github.com/ggascoigne/shareable-configs/tree/main/docs/HUSKY.md).

### Set up Commitizen

Follow the directions [found here](https://github.com/ggascoigne/shareable-configs/tree/main/docs/COMMITIZEN.md).

### Create Config Files

Follow the `Usage` section via the `README.md` in each package.

Some packages have examples of extended configurations to better support other packages and/or constitute a complete working configuration for projects.

See [eslint](https://github.com/ggascoigne/shareable-configs/tree/main/packages/eslint-config#extending), [jest](https://github.com/ggascoigne/shareable-configs/tree/main/packages/jest-config#extending), [lint-staged](https://github.com/ggascoigne/shareable-configs/tree/main/packages/lint-staged-config#extending), [semantic-release](https://github.com/ggascoigne/shareable-configs/tree/main/packages/semantic-release-config#extending), [stylelint](https://github.com/ggascoigne/shareable-configs/tree/main/packages/stylelint-config#extending), and [tsconfig](https://github.com/ggascoigne/shareable-configs/tree/main/packages/tsconfig-config#extending).

### Add NPM Scripts

```bash
npm set-script lint:md "markdownlint --fix **/*.md --ignore node_modules --ignore **/CHANGELOG.md" && npm set-script lint:js "eslint --fix **/*.{js,jsx,ts,tsx}" && npm set-script lint:css "stylelint --fix **/*.{css,scss}" && npm set-script lint:html "htmlhint --config ./node_modules/@ggascoigne/htmlhint-config/index.json **/*.html" && npm set-script lint:secrets "npx secretlint **/*" && npm set-script lint "yarn lint:md && yarn lint:js && yarn lint:css && yarn lint:html && yarn lint:secrets" && npm set-script test "jest"
```

### Install Git Hooks

Install husky and all hooks and npm scripts associated with configs:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit' && npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```

### Webpack

For Webpack, follow the directions in the [README.md](https://github.com/ggascoigne/shareable-configs/tree/main/packages/webpack-config#readme).

## Packages

- ~~[@ggascoigne/babel-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/babel-config#readme)~~ - **DEPRECATED**
- [@ggascoigne/browserslist-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/browserslist-config#readme)
- ~~[@ggascoigne/commitizen-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/commitizen-config#readme)~~ - **DEPRECATED**
- [@ggascoigne/commitlint-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/commitlint-config#readme)
- [@ggascoigne/eslint-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/eslint-config#readme)
- [@ggascoigne/htmlhint-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/htmlhint-config#readme)
- [@ggascoigne/jest-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/jest-config#readme)
- [@ggascoigne/lint-staged-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/lint-staged-config#readme)
- [@ggascoigne/markdownlint-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/markdownlint-config#readme)
- [@ggascoigne/postcss-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/postcss-config#readme)
- [@ggascoigne/prettier-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/prettier-config#readme)
- [@ggascoigne/secretlint-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/secretlint-config#readme)
- [@ggascoigne/semantic-release-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/semantic-release-config#readme)
- [@ggascoigne/stylelint-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/stylelint-config#readme)
- [@ggascoigne/tsconfig-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/tsconfig-config#readme)
- [@ggascoigne/webpack-config](https://github.com/ggascoigne/shareable-configs/tree/main/packages/webpack-config#readme)

## Other Awesome Monorepos

- [lerna-release-workflow](https://github.com/jonwa/lerna-release-workflow) - A basic Lerna monorepo with Yarn Workspaces, Conventional Commits and GitHub Actions.
- [base-configs](https://github.com/demartini/base-configs) - A collection of base configs for code quality and linting tools.
- [threepio](https://github.com/the-holocron/threepio) - Shareable configurations that are used within the Galaxy.
- [medly](https://github.com/medly/configs) - Share common configurations across different projects.

## License

MIT
