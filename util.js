var exec = require('child_process').execSync

Util = {}
Util.run = function (cmd) {
  return exec(cmd).toString().replace('\n', '')
}

Util.limitScale = function (scale, max) {
  for (var i = 0; i < scale.length; i++) {
    if (max < scale[i]) {
      scale[i] = max
      return scale.slice(0, i+1)
    }
  }
}
/**
 * change value by predefined steps in scale
 */
Util.step = function (value, direction, scale) {
  if (direction === 'ASC') {
    for (var i = 0; i < scale.length; i++) {
      if (value < scale[i]*.95) {
        return scale[i]
      }
    }
    //return scale[0]
  } else {
    for (var i = scale.length -1; i >= 0; i--) {
      if (value > scale[i]*1.05) {
        return scale[i]
      }
    }
    //return scale[scale.length -1]
  }
}

Util.getActiveWindow = function () {
  var window = {}
  //window.name = Util.run("wmctrl -l | awk '/Chromium/ {print $1}'")
  window.id = Util.run("xdotool getactivewindow")
  window.width = parseInt(Util.run(`xwininfo -id ${window.id} | grep \"Width\" | awk '{print $2}'`))
  //"
  window.height = parseInt(Util.run(`xwininfo -id ${window.id} | grep \"Height\" | awk '{print $2}'`))
  //"
  return window
}

Util.getDesktopSize = function () {
  var desktop = {}
  desktop.width = parseInt(Util.run("wmctrl -d | awk '{print $9}' | cut -dx -f1"))
  desktop.height = parseInt(Util.run("wmctrl -d | awk '{print $9}' | cut -dx -f2"))
  return desktop
}

Util.getScreenSize = function () {
  var screen = {}
  screen.width = parseInt(Util.run("xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f1"))
  screen.height = parseInt(Util.run("xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f2"))
  return screen
}

module.exports = Util
