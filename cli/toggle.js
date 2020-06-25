#!/usr/bin/env node
import _ from 'lodash'
import Util from '../util.js'
import knownApps from '../known-apps.js'

const appName = process.argv[2]
let className = appName
let launcher = appName
if (knownApps[appName]) {
  className = knownApps[appName].className
  launcher = knownApps[appName].launcher || appName
}

const runningWins = Util.getWindows()
const toFocus = _.filter(runningWins, win => {
  return win.className === className
})

const activeWindowId = Util.getActiveWindowId()
const focusedWindow = _.find(runningWins, { id: parseInt(activeWindowId) })
const isFocused = focusedWindow && focusedWindow.className === className

if (isFocused) Util.run(`xdotool windowminimize ${activeWindowId}`)
else if (!_.isEmpty(toFocus)) {
  _.each(toFocus, win => {
    Util.run(`wmctrl -ia ${win.id}`)
  })
} else Util.run(launcher)
