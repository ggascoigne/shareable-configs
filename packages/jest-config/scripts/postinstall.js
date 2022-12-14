const fs = require('node:fs')
const path = require('node:path')

const filePath = path.join(process.env.INIT_CWD, 'jest.config.js')

const fileConfigObject = {
  preset: '@ggascoigne/jest-config',
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`)
}
