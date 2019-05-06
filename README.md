# Manage windows size and position quickly

# Installation:
## Dependencies:
```
sudo apt install nodejs wmctrl xdotool xwininfo
```

## Setup shortcuts
Add the following to ~/xbindkeysrc
```
# Maximize
"wmctrl -r :ACTIVE: -b toggle,maximized_horz"
    Mod2+Mod4 + Return

# Fullscreen
"wmctrl -r :ACTIVE: -b toggle,fullscreen"
    Shift+Mod2+Mod4 + Return

# Increase window size one step
"node ~/.window-manager/cli/resize+.js"
    Mod2+Mod4 + equal

# Decrease window size one step
"node ~/.window-manager/cli/resize-.js"
    Mod2+Mod4 + minus

# Maximize window vertically
"wmctrl -r :ACTIVE: -b toggle,maximized_vert"
   Shift+Mod2+Mod4 + plus

"node ~/.window-manager/cli/snapLeft.js"
   Mod2+Mod4 + comma

"node ~/.window-manager/cli/snapRight.js"
   Mod2+Mod4 + period

"xdotool getactivewindow windowmove x 0"
   Control+Mod2+Mod4 + k

"xdotool getactivewindow windowmove x 999"
   Control+Mod2+Mod4 + j
  ```
Enable shortcuts by
```
xbindkeys -f ~/xbindkeysrc
```

# Customization
Add apps which don't have matching executables and classnames to known-apps.json

## Super key plus + / - keys
  Increase / decrease window size by step equal to typical screen resolutions: 768, 1024, 1280, 1600, 1920, 2500, 2560, 3440
