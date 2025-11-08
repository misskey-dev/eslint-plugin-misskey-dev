import typescriptEslint from '@typescript-eslint/eslint-plugin';
import stylisticEslint from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';
import javascript from './javascript.js';

const tsRules = {
	/* typescript-eslint では enforce に対応してないっぽい
	'@typescript-eslint/lines-between-class-members': ['error', {
		enforce: [{
			blankLine: 'always',
			prev: 'method',
			next: '*',
		}],
	}],
	*/
	'@stylistic/function-call-spacing': ['error', 'never'],
	//	'@typescript-eslint/func-call-spacing': ['error', 'never'],
	'@typescript-eslint/no-explicit-any': ['warn'],
	'@typescript-eslint/no-unused-vars': ['warn'],
	'@typescript-eslint/no-unnecessary-condition': ['warn'],
	'@typescript-eslint/no-require-imports': ['warn', {
		allowAsImport: true,
	}],
	'@typescript-eslint/no-inferrable-types': ['warn'],
	'@typescript-eslint/no-empty-function': ['off'],
	'@typescript-eslint/no-non-null-assertion': ['warn'],
	'@typescript-eslint/explicit-function-return-type': ['off'],
	'@typescript-eslint/no-misused-promises': ['warn', {
		'checksVoidReturn': false,
	}],
	'@typescript-eslint/consistent-type-imports': 'off',
	'@typescript-eslint/prefer-nullish-coalescing': ['warn'],
	'@typescript-eslint/naming-convention': [
		'error',
		{
			'selector': 'typeLike',
			'format': ['PascalCase'],
		},
		{
			'selector': 'typeParameter',
			'format': [],
		},
	],
};

export default {
	plugins: {
		'@typescript-eslint': fixupPluginRules(typescriptEslint),
		'@stylistic': fixupPluginRules(stylisticEslint),
		import: fixupPluginRules(_import),
	},
	languageOptions: {
		parser: tsParser,
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
	},
	rules: {
		...javascript.rules,
		...tsRules,
	},
};
