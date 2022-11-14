const fs = require('node:fs')
const path = require('node:path')

const filePath = path.join(process.env.INIT_CWD, '.releaserc.json')

const fileConfigObject = {
  extends: ['@ggascoigne/semantic-release-config'],
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
