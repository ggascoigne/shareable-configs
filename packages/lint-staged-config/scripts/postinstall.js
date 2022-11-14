const fs = require('node:fs')
const path = require('node:path')

const filePath = path.join(process.env.INIT_CWD, 'lint-staged.config.js')

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, `module.exports = require('@ggascoigne/lint-staged-config');`)
}
