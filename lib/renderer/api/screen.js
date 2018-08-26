const {remote} = require('electron')

if (!remote) {
  throw new Error('screen requires remote, which is disabled')
}

module.exports = remote.screen
