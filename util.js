const exec = require('child_process').execSync

const _ = require('lodash')
const Util = {}
Util.run = function (cmd) {
  return exec(cmd).toString().replace('\n', '')
}

Util.limitScale = function (scale, max) {
  for (let i = 0; i < scale.length; i++) {
    if (max < scale[i]) {
      scale[i] = max
      return scale.slice(0, i + 1)
    }
  }
}
/**
 * change value by predefined steps in scale
 */
Util.step = function (value, direction, scale) {
  if (direction === 'ASC') {
    for (let i = 0; i < scale.length; i++) {
      if (value < scale[i] * 0.95) {
        return scale[i]
      }
    }
    // return scale[0]
  } else {
    for (let i = scale.length - 1; i >= 0; i--) {
      if (value > scale[i] * 1.05) {
        return scale[i]
      }
    }
    // return scale[scale.length -1]
  }
}

Util.getActiveWindowId = function () {
  return Util.run('xdotool getactivewindow')
}

Util.getActiveWindow = function () {
  const window = {}
  // window.name = Util.run("wmctrl -l | awk '/Chromium/ {print $1}'")
  window.id = Util.getActiveWindowId()
  window.width = parseInt(Util.run(`xwininfo -id ${window.id} | grep \"Width\" | awk '{print $2}'`))
  window.height = parseInt(Util.run(`xwininfo -id ${window.id} | grep \"Height\" | awk '{print $2}'`))
  return window
}

Util.getWindows = function () {
  const summary = exec('wmctrl -lxpG').toString()
  return _(summary.split('\n'))
    .map(attributesLine => {
      if (_.isEmpty(attributesLine)) return
      attributesLine.replace('\n', '')
      const list = attributesLine.split(/\s+/)
      const className = list[7].includes('.') ? list[7].split('.')[0] : list[7]
      const appName = list[7].includes('.') ? list[7].split('.')[1] : list[7]
      return {
        id: parseInt(list[0]),
        id_hex: list[0],
        desktop: list[1],
        pid: list[2],
        x: list[3],
        y: list[4],
        width: list[5],
        height: list[6],
        class: list[7],
        className,
        appName,
        name: list.splice(8).join(' '),
      }
    }).compact().value()
}

// Also known as Workspace
Util.getDesktopSize = function () {
  const info = Util.run("wmctrl -d")
  const sizeString = info.match(/\*.*(\s\d+x\d+\s)/)
  let size
  if (sizeString && sizeString[1]) size = sizeString[1].split('x')

  return {
    width: parseInt(size[0]),
    height: parseInt(size[1]),
  }
}

Util.getScreenSize = function () {
  const screen = {}
  screen.width = parseInt(Util.run("xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f1"))
  screen.height = parseInt(Util.run("xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f2"))
  return screen
}

module.exports = Util
