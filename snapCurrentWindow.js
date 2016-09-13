#!/usr/bin/env node
const Util = require('./util')

module.exports = function (direction) {
  const window = Util.getActiveWindow()
  const screen = Util.getScreenSize()
  let x = 'x'
  const y = 'y'

  if (direction === 'Left') x = 0 // screen.width - desktop.width
  if (direction === 'Right') x = screen.width - window.width
  Util.run(`xdotool windowmove ${window.id} ${x} ${y}`)
}
