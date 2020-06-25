# Manage windows size and position on Linux with keyboard
Tiling window managers may be an overkill while arranging windows with mouse is certainly a productivity loss. This is a simple yet efficient solution.

## Installation:
### Dependencies:
```
sudo apt install nodejs wmctrl xdotool xwininfo
```
Note: nodejs should be at least v14

### Suggested keyboard layout

[![](https://raw.githubusercontent.com/window-manager/master/keyboard-layout.png)](http://daviste.com/demo/keyboard-layout/?physical=lenovo+y70-70&visual=lenovo+y70-70+workman&functional=dmitra%2Fubuntu&context=undefined&keys=Meta+Left)

In this keyboard layout windows are manipulated by 6 keys plus two modifiers.  
One is "Super / Win" key to activate the "windows manipulation" layer
and "Shift" to "change" the meaning of the key pressed.  
"+" and "-" keys are used for horizontal resizing by step equal to typical screen resolutions:
768, 1024, 1280, 1600, 1920, 2500, 2560, 3440.
"Shift" changes direction of manipulation to vertical.
But only "maximized" to all available vertical dimension makes sense to me.  
Snapping is assigned to angle brackets.  
"Enter" maximized window in all directions, "Escape" closes.
You can read more about this particular layout and the rationale behind in this [article](http://daviste.com/project/technology/window-manager/)

[Interactive visualization](http://daviste.com/demo/keyboard-layout/?physical=lenovo+y70-70&visual=lenovo+y70-70+workman&functional=dmitra%2Fubuntu&context=undefined&keys=Meta+Left) where you can click Shift and see what it does.

### Setup shortcuts
I'm using [Autokey](https://github.com/autokey/autokey) for managing all my keyboard shortcuts.
I made two configuration in my dotfiles for [qwerty](https://github.com/Dmitra/dotfiles/tree/master/keyboard/autokey/qwerty/Window) and [workman](https://github.com/Dmitra/dotfiles/tree/master/keyboard/autokey/workman/Window) layouts.

Alternatively you can use ./xbindkeys by sourcing sample file in this repo:
```
xbindkeys -f ./xbindkeysrc
```

# Customization
Add apps which don't have matching executables and classnames to known-apps.js
