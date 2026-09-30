return {
	{
		"WhoIsSethDaniel/mason-tool-installer.nvim",
		dependencies = { "mason-org/mason.nvim" },
		opts = {
			ensure_installed = {
				-- LSP
				"pyright",
				"ruff",

				"typescript-language-server",
				"html-lsp",
				"css-lsp",
				"tailwindcss-language-server",
				"emmet-ls",
				"eslint-lsp",
				"json-lsp",

				"clangd",

				"lua-language-server",

				"qmlls",

				-- Formatters
				-- "ruff",
				"prettier",
				"clang-format",
				"stylua",

				-- Linters
				-- "ruff",

				"eslint_d",
				"htmlhint",
				"stylelint",
				"luacheck",

				"cpplint",

				"markdownlint-cli2",
				"markdown-toc",
			},
		},
	},
}
