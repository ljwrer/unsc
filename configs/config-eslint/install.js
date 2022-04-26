const { exec } = require('child_process')
const pkg = require('./package.json')
const deps = Object.keys(pkg.peerDependencies)
const depsStr = deps.join(' ')
const command = `pnpm add ${depsStr} -DW`
exec(command, function (err, stdout) {
  console.log(stdout)
})
