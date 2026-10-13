return {
	"selimacerbas/kitehost.nvim",
	dependencies = {},
	opts = {
		default_port = 8000,
		live_reload = { enabled = true, inject_script = true, debounce = 120, css_inject = true },
		directory_listing = { enabled = true, show_hidden = false },
	},
	keys = {
		{ "<leader>ls", "<cmd>KiteHost start<cr>", desc = "Start (pick path & port)" },
		{ "<leader>lo", "<cmd>KiteHost open<cr>", desc = "Open existing port in browser" },
		{ "<leader>lr", "<cmd>KiteHost reload<cr>", desc = "Force reload (pick port)" },
		{ "<leader>lt", "<cmd>KiteHost toggle-live<cr>", desc = "Toggle live-reload (pick port)" },
		{ "<leader>li", "<cmd>KiteHost status<cr>", desc = "Show server status" },
		{ "<leader>lS", "<cmd>KiteHost stop<cr>", desc = "Stop one (pick port)" },
		{ "<leader>lA", "<cmd>KiteHost stop-all<cr>", desc = "Stop all" },
	},
	config = function(_, opts)
		require("kitehost").setup(opts)
	end,
}
