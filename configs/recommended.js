import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import javascript from './javascript.js';
import typescript from './typescript.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...fixupConfigRules(compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		// TODO: 有効にすると .ts ファイルで import したときに
		//       parserPath or languageOptions.parser is required!
		//       と出るので以下を無効化しておく
		// 'plugin:import/recommended',
		'plugin:import/typescript',
	)),
	{
		files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
		...javascript,
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		...typescript,
	},
];
