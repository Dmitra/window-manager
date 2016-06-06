#!/usr/bin/env node
Util = require('./util')
var snapper = require('./snapCurrentWindow')

module.exports = function (direction) {
  var window = Util.getActiveWindow()
  , screen = Util.getScreenSize()
  , desktop = Util.getDesktopSize()
  , screenWidths = [768, 1024, 1280, 1600, 1920, 2500, 2560, 3440]

  var widths = Util.limitScale(screenWidths, desktop.width)

  //var snapToRight = desktop.width === window.width + window.x
  var snapToRight = Util.run(`xwininfo -id ${window.id} | grep "Corners" | awk '{print $3}'`).substring(0,2) === '-0'
  window.width = Util.step(window.width, direction, widths)

  Util.run(`xdotool windowsize ${window.id} ${window.width} ${window.height}`)
  // don't work ???
  //Util.run(`winctrl -ri ${window.id} -e 0,0,0,${window.width},${window.height}`)
  if (snapToRight) snapper('Right')
}
