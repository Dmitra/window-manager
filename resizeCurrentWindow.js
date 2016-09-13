#!/usr/bin/env node
const Util = require('./util')
const snapper = require('./snapCurrentWindow')

module.exports = function (direction) {
  const window = Util.getActiveWindow()
  const desktop = Util.getDesktopSize()
  const screenWidths = [360, 480, 640, 768, 1024, 1280, 1600, 1920, 2500, 2560, 3440]

  const widths = Util.limitScale(screenWidths, desktop.width)

  // var snapToRight = desktop.width === window.width + window.x
  const wininfo = Util.run(`xwininfo -id ${window.id} | grep "Corners" | awk '{print $3}'`)
  const snapToRight = wininfo.substring(0, 2) === '-0'
  window.width = Util.step(window.width, direction, widths)

  Util.run(`xdotool windowsize ${window.id} ${window.width} ${window.height}`)
  // don't work ???
  // Util.run(`winctrl -ri ${window.id} -e 0,0,0,${window.width},${window.height}`)
  if (snapToRight) snapper('Right')
}
