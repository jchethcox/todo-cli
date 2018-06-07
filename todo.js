const { head } = require('ramda')

const [execPath, jsPath, cmd, ...rest] = process.argv

// console.log(`execPath`, execPath)
// console.log(`jsPath`, execPath)
// console.log(`cmd`, cmd)
// console.log(`rest`, rest)

function handleCmd(cmd) {
  switch (cmd) {
    case 'add':
      return 'you asked for add'
    case 'rm':
      return 'you asked for remove'
    case 'init':
      return 'you asked for init'
    default:
      return `${cmd} is not supported`
  }
}

console.log(handleCmd(cmd))
