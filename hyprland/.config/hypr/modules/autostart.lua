-------------------
---- AUTOSTART ----
-------------------
-- Autostart necessary processes (like notifications daemons, status bars, etc.)

hl.on("hyprland.start", function()
	hl.exec_cmd("awww-daemon")
	hl.exec_cmd("hypridle")
	hl.exec_cmd("ashell")
	hl.exec_cmd("hyprctl setcursor catppuccin-mocha-lavender-cursors 24")
end)
