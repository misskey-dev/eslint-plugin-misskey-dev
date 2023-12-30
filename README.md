# @misskey-dev/eslint-plugin

`@misskey-dev/eslint-plugin` is an ESLint plugin designed for Misskey developers. This plugin helps you write code that adheres to the coding style and best practices of the Misskey project.

## Installation

First, install the plugin using npm.

```bash
npm install --save-dev eslint @misskey-dev/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

## Usage

Create `.eslintrc.cjs` file and write as follows:

```javascript:.eslintrc.cjs
module.exports = {
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
    ignorePatterns: ['**/.eslintrc.cjs'],
	extends: [
		'plugin:@misskey-dev/recommended',
	],
};
```

In tsconfig, strictNullChecks must be true.

```json:tsconfig.json
{
    "compilerOptions": {
        ...
        "strictNullChecks": true,
        ...
    },
}
```

Add the eslint task to `package.json`

```json:package.json
{
  "scripts": {
    "eslint": "eslint . --ext .js,.jsx,.ts,.tsx"
  },
}
```

Run the task

```
npm run eslint
```

## License
MIT License
