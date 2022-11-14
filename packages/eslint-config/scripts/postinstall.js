const fs = require('node:fs')
const path = require('node:path')

const filePath = path.join(process.env.INIT_CWD, '.eslintrc.js')

const fileConfigObject = {
  extends: '@ggascoigne/eslint-config',
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`)
}
