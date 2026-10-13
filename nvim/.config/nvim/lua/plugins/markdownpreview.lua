return {
	{
		"iamcco/markdown-preview.nvim",
		cmd = { "MarkdownPreviewToggle", "MarkdownPreview", "MarkdownPreviewStop" },
		ft = { "markdown" },
		-- Use npm or yarn here. pnpm's symlinking causes the msgpack-lite error.
		build = "cd app && npm install",
		init = function()
			vim.g.mkdp_theme = "dark"
		end,
		keys = {
			{
				"<leader>mp",
				"<cmd>MarkdownPreviewToggle<cr>",
				desc = "Markdown Preview",
			},
		},
	},
}
