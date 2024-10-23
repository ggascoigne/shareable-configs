import { configs } from '@ggascoigne/eslint-config'

export default [
  ...configs.globalIgnores,
  ...configs.recommendedJs,
  {
    name: 'local overrides',
    rules: {
      'no-undef': ['off'],
    },
  },
]
