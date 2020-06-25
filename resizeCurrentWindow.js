import Util from './util.js'
import snapper from './snapCurrentWindow.js'
import { SCREEN_WIDTHS } from './constants.js'

export default function (direction) {
  const window = Util.getActiveWindow()
  const desktop = Util.getDesktopSize()

  const widths = Util.limitScale(SCREEN_WIDTHS, desktop.width)

  // var snapToRight = desktop.width === window.width + window.x
  const wininfo = Util.run(`xwininfo -id ${window.id} | grep "Corners" | awk '{print $3}'`)
  const snapToRight = wininfo.substring(0, 2) === '-0'
  window.width = Util.step(window.width, direction, widths)

  Util.run(`xdotool windowsize ${window.id} ${window.width} ${window.height}`)
  // don't work ???
  // Util.run(`winctrl -ri ${window.id} -e 0,0,0,${window.width},${window.height}`)
  if (snapToRight) snapper('Right')
}
