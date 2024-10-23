# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.13.0](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.12.6...@ggascoigne/webpack-config@2.13.0) (2024-10-23)

### Features

- **eslint:** eslint v9 support ([a9a8537](https://github.com/ggascoigne/shareable-configs/commit/a9a85370bfe64f81fda8cbf04d500d12435e7b0b))

## [2.12.6](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.12.5...@ggascoigne/webpack-config@2.12.6) (2023-12-18)

### Bug Fixes

- **eslint-config:** remove etc/no-deprecated since it's so slow ([4f621a3](https://github.com/ggascoigne/shareable-configs/commit/4f621a3ffd5e7332ec3a8c044c6af78fbc5a975d))

## [2.12.5](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.12.4...@ggascoigne/webpack-config@2.12.5) (2023-11-12)

### Bug Fixes

- **build:** dep updates ([fe90c59](https://github.com/ggascoigne/shareable-configs/commit/fe90c592b6f73a91222089768ac36cb70228d277))

## [2.12.4](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.12.3...@ggascoigne/webpack-config@2.12.4) (2023-10-01)

**Note:** Version bump only for package @ggascoigne/webpack-config

## [2.12.3](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.12.2...@ggascoigne/webpack-config@2.12.3) (2023-09-09)

**Note:** Version bump only for package @ggascoigne/webpack-config

## [2.12.2](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.12.1...@ggascoigne/webpack-config@2.12.2) (2023-04-09)

**Note:** Version bump only for package @ggascoigne/webpack-config

## [2.12.1](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.12.0...@ggascoigne/webpack-config@2.12.1) (2022-12-26)

### Bug Fixes

- **eslint:** clean up eslint rules ([0289a3b](https://github.com/ggascoigne/shareable-configs/commit/0289a3baf46598cd58daeb8b7f7a88edbed3a924))

# [2.12.0](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.11.0...@ggascoigne/webpack-config@2.12.0) (2022-11-14)

### Features

- **eslint-config:** fixup the base lint config to be plain js ([f60483f](https://github.com/ggascoigne/shareable-configs/commit/f60483f30f8012829c9ae13feb1d80d2a159c963))

# [2.11.0](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.10.0...@ggascoigne/webpack-config@2.11.0) (2022-11-14)

### Bug Fixes

- fix author and copyright values ([8c79032](https://github.com/ggascoigne/shareable-configs/commit/8c79032a96db2bfe8b6db057751e78b0dfa52c7e))

### Features

- **build:** switch to pnpm instead of yarn ([53f1d12](https://github.com/ggascoigne/shareable-configs/commit/53f1d12bd3ab399e096d47a7909bf6e55f9dcabd))

# 2.10.0 (2022-11-13)

### Bug Fixes

- **global:** update documentation ([120938a](https://github.com/ggascoigne/shareable-configs/commit/120938a301c88730d31dc8c8f919c960d193edb2))
- **global:** update packages to comply with new eslint config ([dbee043](https://github.com/ggascoigne/shareable-configs/commit/dbee043b0a6b0a1d99e44e6cb8af9fa52133aab9))
- **lerna.json:** remove package.json from lerna ignore, update descriptions and workflow ([660a9a6](https://github.com/ggascoigne/shareable-configs/commit/660a9a60858863dca1d4b87cb0a3c49ffd2186b6))
- **makedownlint:** fix rules and cleanup changelogs ([23eb605](https://github.com/ggascoigne/shareable-configs/commit/23eb605a42fd51ca0b5d24de781929a1662e634f))
- **package.json:** add scripts directory to files array ([611a854](https://github.com/ggascoigne/shareable-configs/commit/611a8546f5c398404e5f226d61b5b42939944cc9))
- **package.json:** sync yarn.lock versions to package.json ([c295919](https://github.com/ggascoigne/shareable-configs/commit/c295919e8cd1fbbd7965fe67d0188e0d657b6427))
- **scripts/files:** disable eslint on webpack script files to prevent other ci configs from linting ([3471c6d](https://github.com/ggascoigne/shareable-configs/commit/3471c6de73833dee124c365823b7af864b7c5c05))
- **webpack-config:** remove postinstall script and files, add webpack-cli as peer dep ([4c5c725](https://github.com/ggascoigne/shareable-configs/commit/4c5c72508cd311076e5782b3fb4304add184f69a))

### Features

- **global:** bumb deps in package.json files ([93a31fc](https://github.com/ggascoigne/shareable-configs/commit/93a31fc22c3fa646b0b037af65193a0ef1a3a1c6))
- **webpack.common.js:** remove default parts in base webpack.common ([626b696](https://github.com/ggascoigne/shareable-configs/commit/626b696e34dcf95bf22a64eedac2a8d6b7ac20de))
- **webpack.parts.js:** add loader for raw assets ([9ecf1f6](https://github.com/ggascoigne/shareable-configs/commit/9ecf1f6cd6355c38883e2948e12ca9873e8838c2))
- **webpack.parts.js:** separate ForkTsChecker from ts loaders into standalone function ([9e1a985](https://github.com/ggascoigne/shareable-configs/commit/9e1a985ae29c580e4109d71920c7a2e6b86973c5))
- **webpack.prod.js:** remove minification from webpack.prod ([64717f6](https://github.com/ggascoigne/shareable-configs/commit/64717f6ffbb2e20c8a374a213081fe56ed276ae0))
- **webpack:** add support for accessing env variable via webpack.common.js ([99260e5](https://github.com/ggascoigne/shareable-configs/commit/99260e5c359226f1d56e8f8de84e2bf1e31618d4))

## [2.9.5](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.9.4...@ggascoigne/webpack-config@2.9.5) (2022-10-23)

### Bug Fixes

- **package.json:** sync yarn.lock versions to package.json ([c295919](https://github.com/ggascoigne/shareable-configs/commit/c295919e8cd1fbbd7965fe67d0188e0d657b6427))

## [2.9.4](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.9.3...@ggascoigne/webpack-config@2.9.4) (2022-06-17)

### Bug Fixes

- **global:** update documentation ([120938a](https://github.com/ggascoigne/shareable-configs/commit/120938a301c88730d31dc8c8f919c960d193edb2))

## [2.9.3](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.9.2...@ggascoigne/webpack-config@2.9.3) (2022-06-05)

### Bug Fixes

- **webpack-config:** remove postinstall script and files, add webpack-cli as peer dep ([4c5c725](https://github.com/ggascoigne/shareable-configs/commit/4c5c72508cd311076e5782b3fb4304add184f69a))

## [2.9.2](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.9.1...@ggascoigne/webpack-config@2.9.2) (2022-05-30)

**Note:** Version bump only for package @ggascoigne/webpack-config

## [2.9.1](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.9.0...@ggascoigne/webpack-config@2.9.1) (2022-05-30)

### Bug Fixes

- **global:** update packages to comply with new eslint config ([dbee043](https://github.com/ggascoigne/shareable-configs/commit/dbee043b0a6b0a1d99e44e6cb8af9fa52133aab9))

## [2.9.0](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.8.1...@ggascoigne/webpack-config@2.9.0) (2022-05-24)

### Features

- **global:** bumb deps in package.json files ([93a31fc](https://github.com/ggascoigne/shareable-configs/commit/93a31fc22c3fa646b0b037af65193a0ef1a3a1c6))

## [2.8.1](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.8.0...@ggascoigne/webpack-config@2.8.1) (2022-05-24)

**Note:** Version bump only for package @ggascoigne/webpack-config

## [2.8.0](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.7.3...@ggascoigne/webpack-config@2.8.0) (2022-04-12)

### Features

- **webpack:** add support for accessing env variable via webpack.common.js ([99260e5](https://github.com/ggascoigne/shareable-configs/commit/99260e5c359226f1d56e8f8de84e2bf1e31618d4))

## [2.7.3](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.7.2...@ggascoigne/webpack-config@2.7.3) (2022-04-09)

### Bug Fixes

- **scripts/files:** disable eslint on webpack script files to prevent other ci configs from linting ([3471c6d](https://github.com/ggascoigne/shareable-configs/commit/3471c6de73833dee124c365823b7af864b7c5c05))

## [2.7.2](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.7.1...@ggascoigne/webpack-config@2.7.2) (2022-04-09)

### Bug Fixes

- **lerna.json:** remove package.json from lerna ignore, update descriptions and workflow ([660a9a6](https://github.com/ggascoigne/shareable-configs/commit/660a9a60858863dca1d4b87cb0a3c49ffd2186b6))
- **package.json:** add scripts directory to files array ([611a854](https://github.com/ggascoigne/shareable-configs/commit/611a8546f5c398404e5f226d61b5b42939944cc9))

## [2.7.1](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.7.0...@ggascoigne/webpack-config@2.7.1) (2022-04-09)

**Note:** Version bump only for package @ggascoigne/webpack-config

## [2.7.0](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.6.4...@ggascoigne/webpack-config@2.7.0) (2022-04-08)

### Features

- **webpack.common.js:** remove default parts in base webpack.common ([626b696](https://github.com/ggascoigne/shareable-configs/commit/626b696e34dcf95bf22a64eedac2a8d6b7ac20de))
- **webpack.parts.js:** add loader for raw assets ([9ecf1f6](https://github.com/ggascoigne/shareable-configs/commit/9ecf1f6cd6355c38883e2948e12ca9873e8838c2))
- **webpack.parts.js:** separate ForkTsChecker from ts loaders into standalone function ([9e1a985](https://github.com/ggascoigne/shareable-configs/commit/9e1a985ae29c580e4109d71920c7a2e6b86973c5))
- **webpack.prod.js:** remove minification from webpack.prod ([64717f6](https://github.com/ggascoigne/shareable-configs/commit/64717f6ffbb2e20c8a374a213081fe56ed276ae0))

## [2.6.4](https://github.com/ggascoigne/shareable-configs/compare/@ggascoigne/webpack-config@2.6.3...@ggascoigne/webpack-config@2.6.4) (2022-04-07)

**Note:** Version bump only for package @ggascoigne/webpack-config

## 2.6.3 (2022-04-07)

**Note:** Version bump only for package @ggascoigne/webpack-config
