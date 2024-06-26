# @misskey-dev/eslint-plugin

`@misskey-dev/eslint-plugin` is an ESLint plugin designed for Misskey developers. This plugin helps you write code that adheres to the coding style and best practices of the Misskey project.

## Installation

First, install the plugin using npm.

```bash
npm install --save-dev eslint @misskey-dev/eslint-plugin @typescript-eslint/parser
```

## Usage

Create `eslint.config.js` file and write as follows

```javascript:eslint.config.js
import pluginMisskey from '@misskey-dev/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	...pluginMisskey.configs['recommended'],
	{
		files: ['**/*.js', '**/*.jsx'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				parser: tsParser,
				project: ['./tsconfig.json'],
				sourceType: 'module',
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
```

In tsconfig, strictNullChecks must be true.

```json:tsconfig.json
{
	"compilerOptions": {
		// ...
		"strictNullChecks": true,
		// ...
	},
}
```

Add the eslint task to `package.json`

```json:package.json
{
	"scripts": {
		"eslint": "eslint './**/*.{js,jsx,ts,tsx}'"
	},
}
```

Run the task

```
npm run eslint
```

## License
MIT License
