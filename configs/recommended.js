import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import javascript from './javascript.js';
import typescript from './typescript.js';

export default [
	js.configs.recommended,
	...typescriptEslint.configs['flat/recommended'],
	{
		files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
		...javascript,
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		...typescript,
	},
];
