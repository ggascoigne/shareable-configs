import { existsSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const filePath = join(process.env.INIT_CWD, 'eslint.config.mjs')

const fileContent = `
import config from '@ggascoigne/eslint-config'

export default config
`

if (!existsSync(filePath)) {
  writeFileSync(filePath, fileContent)
}
