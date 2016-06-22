  # Increase window horizontally
gsettings set org.compiz.integrated command-1 "node ~/.window-manager/cli/resize+.js"
gsettings set org.compiz.integrated run-command-1 "['<Super>equal']"
  # Decrease window horizontally
gsettings set org.compiz.integrated command-2 "node ~/.window-manager/cli/resize-.js"
gsettings set org.compiz.integrated run-command-2 "['<Super>minus']"
  # Increase window vertically
gsettings set org.compiz.integrated command-3 "wmctrl -r :ACTIVE: -b add,maximized_vert"
gsettings set org.compiz.integrated run-command-3 "['<Shift><Super>plus']"
  # Decrease window vertically
gsettings set org.compiz.integrated command-4 "wmctrl -r :ACTIVE: -b remove,maximized_vert"
gsettings set org.compiz.integrated run-command-4 "['<Shift><Super>underscore']"
  # Snap window to left
gsettings set org.compiz.integrated command-5 "node ~/.window-manager/cli/snapLeft.js"
gsettings set org.compiz.integrated run-command-5 "['<Alt><Super>h']"
  # Snap window to right
gsettings set org.compiz.integrated command-6 "node ~/.window-manager/cli/snapRight.js"
gsettings set org.compiz.integrated run-command-6 "['<Alt><Super>l']"
  # Snap window to top
gsettings set org.compiz.integrated command-7 "xdotool getactivewindow windowmove x 0"
gsettings set org.compiz.integrated run-command-7 "['<Alt><Super>k']"
  # Snap window to bottom
gsettings set org.compiz.integrated command-8 "xdotool getactivewindow windowmove x 999"
gsettings set org.compiz.integrated run-command-8 "['<Alt><Super>j']"
