import path from 'node:path';
import { fileURLToPath } from 'node:url';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import _import from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const jsRules = {
	'indent': ['warn', 'tab', {
		'SwitchCase': 1,
		'MemberExpression': 1,
		'flatTernaryExpressions': true,
		'ArrayExpression': 'first',
		'ObjectExpression': 'first',
	}],
	'eol-last': ['error', 'always'],
	'semi': ['error', 'always'],
	'semi-spacing': ['error', { 'before': false, 'after': true }],
	'quotes': ['warn', 'single'],
	'comma-dangle': ['warn', 'always-multiline'],
	'comma-spacing': ['error', { 'before': false, 'after': true }],
	'array-bracket-spacing': ['error', 'never'],
	'keyword-spacing': ['error', {
		'before': true,
		'after': true,
	}],
	'key-spacing': ['error', {
		'beforeColon': false,
		'afterColon': true,
	}],
	'arrow-spacing': ['error', {
		'before': true,
		'after': true,
	}],
	'brace-style': ['error', '1tbs', {
		'allowSingleLine': true,
	}],
	'padded-blocks': ['error', 'never'],
	/* TODO: path aliasを使わないとwarnする
	'no-restricted-imports': ['warn', {
		'patterns': [
		],
	}],
	*/
	'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
	'no-multi-spaces': ['error'],
	'no-var': ['error'],
	'prefer-arrow-callback': ['error'],
	'no-throw-literal': ['error'],
	'no-param-reassign': ['warn'],
	'no-constant-condition': ['warn'],
	'no-empty-pattern': ['warn'],
	'no-async-promise-executor': ['off'],
	'no-useless-escape': ['off'],
	'no-multiple-empty-lines': ['error', { 'max': 1 }],
	'no-control-regex': ['warn'],
	'no-empty': ['warn'],
	'no-inner-declarations': ['off'],
	'no-sparse-arrays': ['off'],
	'nonblock-statement-body-position': ['error', 'beside'],
	'object-curly-spacing': ['error', 'always'],
	'space-infix-ops': ['error'],
	'space-before-blocks': ['error', 'always'],
	'padding-line-between-statements': [
		'error',
		{ 'blankLine': 'always', 'prev': 'function', 'next': '*' },
		{ 'blankLine': 'always', 'prev': '*', 'next': 'function' },
	],
	'lines-between-class-members': 'off',
	'import/no-unresolved': ['off'],
	'import/no-default-export': ['warn'],
	'import/order': ['warn', {
		'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
	}],
};

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
	'@typescript-eslint/func-call-spacing': ['error', 'never'],
	'@typescript-eslint/no-explicit-any': ['warn'],
	'@typescript-eslint/no-unused-vars': ['warn'],
	'@typescript-eslint/no-unnecessary-condition': ['warn'],
	'@typescript-eslint/no-var-requires': ['warn'],
	'@typescript-eslint/no-inferrable-types': ['warn'],
	'@typescript-eslint/no-empty-function': ['off'],
	'@typescript-eslint/no-non-null-assertion': ['warn'],
	'@typescript-eslint/explicit-function-return-type': ['off'],
	'@typescript-eslint/no-misused-promises': ['error', {
		'checksVoidReturn': false,
	}],
	'@typescript-eslint/consistent-type-imports': 'off',
	'@typescript-eslint/prefer-nullish-coalescing': [
		'warn',
	],
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
		plugins: {
			import: fixupPluginRules(_import),
		},
		settings: {
			/** @see https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561 */
			'import/parsers': {
				'@typescript-eslint/parser': ['.js', '.cjs', '.mjs', '.jsx'],
			},
		},
		rules: {
			...jsRules,
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
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
			...jsRules,
			...tsRules,
		},
	},
];
