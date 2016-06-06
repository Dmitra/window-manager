#!/usr/bin/env node
Util = require('./util')

module.exports = function (direction) {
  var window = Util.getActiveWindow()
  , screen = Util.getScreenSize()
  , x = 'x'
  , y = 'y'

  if (direction === 'Left') x = 0//screen.width - desktop.width
  if (direction === 'Right') x = screen.width - window.width
    console.log(x)
  Util.run(`xdotool windowmove ${window.id} ${x} ${y}`)
}
