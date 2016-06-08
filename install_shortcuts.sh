gsettings set org.compiz.integrated command-1 "node ~/.window-manager/cli/resize+.js"
gsettings set org.compiz.integrated run-command-1 "['<Super>KP_Add']"
gsettings set org.compiz.integrated command-2 "node ~/.window-manager/cli/resize-.js"
gsettings set org.compiz.integrated run-command-2 "['<Super>KP_Subtract']"
gsettings set org.compiz.integrated command-3 "node ~/.window-manager/cli/snapLeft.js"
gsettings set org.compiz.integrated run-command-3 "['<Super>Left']"
gsettings set org.compiz.integrated command-4 "node ~/.window-manager/cli/snapRight.js"
gsettings set org.compiz.integrated run-command-4 "['<Super>Right']"
  # Snap window to top
gsettings set org.compiz.integrated command-5 "xdotool getactivewindow windowmove x 0"
gsettings set org.compiz.integrated run-command-5 "['<Super>Up']"
  # Snap window to bottom
gsettings set org.compiz.integrated command-6 "xdotool getactivewindow windowmove x 999"
gsettings set org.compiz.integrated run-command-6 "['<Super>Down']"
