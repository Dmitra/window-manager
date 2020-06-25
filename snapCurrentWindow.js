import _ from 'lodash'
import Util from './util.js'
import { SCREEN_WIDTHS } from './constants.js'

const VICINITY = 10
const CENTER_SNAP = {
  SCREEN_SIZE_THRESHOLD: 3200,
  WINDOW_SIZE_THRESHOLD: 1147,
}

export default function (direction) {
  const screen = Util.getScreenSize()
  const window = Util.getActiveWindow()
  let { x, y } = window
  const steps = [0, screen.width - window.width]
  // const steps = SCREEN_WIDTHS

  // introduce center snap position
  if (screen.width >= CENTER_SNAP.SCREEN_SIZE_THRESHOLD) steps.splice(1, 0, (screen.width - window.width) / 2)
  console.log('STEPS', steps)

  if (direction === 'Right') {
    for (let i = 0, end = steps.length; i < end; i++) {
      const step = steps[i]
      if (step > x) {
        x = step
        break
      }
    }
  }

  if (direction === 'Left') {
    for (let i = steps.length - 1, end = 0; i >= end; i--) {
      const step = steps[i]
      if (step < x - VICINITY) {
        x = step
        break
      }
    }
  }

  console.log(x, y)
  Util.run(`xdotool windowmove ${window.id} ${x} ${0}`)
}
