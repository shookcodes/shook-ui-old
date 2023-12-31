module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:astro/recommended",
		"plugin:astro/jsx-a11y-recommended",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				".eslintrc.{js,cjs}",
				"*.astro",
				"*.vue",
				"*.ts",
				"*.tsx",
				"*.svelte",
			],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		extraFileExtensions: [".astro"],
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {},
};
