import { Linter } from 'eslint'

declare const configs: {
  globalIgnores: Linter.Config[]
  slow: Linter.Config[]
  recommendedJs: Linter.Config[]
  officialReact: Linter.Config[]
  react: Linter.Config[]
  baseTypescript: Linter.Config[]
  recommendedTs: Linter.Config[]
}

declare const eslintTsConfigs: Linter.Config[]
declare const baseTypescript: Linter.Config[]

declare const _default: Linter.Config[]

export { configs, eslintTsConfigs, baseTypescript }
export default _default

