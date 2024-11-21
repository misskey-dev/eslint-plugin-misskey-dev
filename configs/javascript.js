import { fixupPluginRules } from '@eslint/compat';
import stylisticEslint from '@stylistic/eslint-plugin';
import _import from 'eslint-plugin-import';

const jsRules = {
	/* TODO: path aliasを使わないとwarnする
	'no-restricted-imports': ['warn', {
		'patterns': [
		],
	}],
	*/
	'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
	'no-var': ['error'],
	'prefer-arrow-callback': ['error'],
	'no-throw-literal': ['error'],
	'no-param-reassign': ['warn'],
	'no-constant-condition': ['warn'],
	'no-empty-pattern': ['warn'],
	'no-async-promise-executor': ['off'],
	'no-useless-escape': ['off'],
	'no-control-regex': ['warn'],
	'no-empty': ['warn'],
	'no-inner-declarations': ['off'],
	'no-sparse-arrays': ['off'],
	'import/no-unresolved': ['off'],
	'import/no-default-export': ['warn'],
	'import/order': ['warn', {
		'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
	}],

	//#region stylistic
	'@stylistic/array-bracket-spacing': ['error', 'never'],
	'@stylistic/arrow-spacing': ['error', {
		'before': true,
		'after': true,
	}],
	'@stylistic/brace-style': ['error', '1tbs', {
		'allowSingleLine': true,
	}],
	'@stylistic/comma-dangle': ['warn', 'always-multiline'],
	'@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
	'@stylistic/eol-last': ['error', 'always'],
	'@stylistic/key-spacing': ['error', {
		'beforeColon': false,
		'afterColon': true,
	}],
	'@stylistic/keyword-spacing': ['error', {
		'before': true,
		'after': true,
	}],
	'@stylistic/indent': ['warn', 'tab', {
		'SwitchCase': 1,
		'MemberExpression': 1,
		'flatTernaryExpressions': true,
		'ArrayExpression': 'first',
		'ObjectExpression': 'first',
	}],
	'@stylistic/lines-between-class-members': 'off',
	'@stylistic/no-multi-spaces': ['error'],
	'@stylistic/no-multiple-empty-lines': ['error', { 'max': 1 }],
	'@stylistic/object-curly-spacing': ['error', 'always'],
	'@stylistic/padded-blocks': ['error', 'never'],
	'@stylistic/nonblock-statement-body-position': ['error', 'beside'],
	'@stylistic/padding-line-between-statements': [
		'error',
		{ 'blankLine': 'always', 'prev': 'function', 'next': '*' },
		{ 'blankLine': 'always', 'prev': '*', 'next': 'function' },
	],
	'@stylistic/quotes': ['warn', 'single'],
	'@stylistic/semi': ['error', 'always'],
	'@stylistic/semi-spacing': ['error', { 'before': false, 'after': true }],
	'@stylistic/space-before-blocks': ['error', 'always'],
	'@stylistic/space-infix-ops': ['error'],
	//#endregion
};

export default {
	plugins: {
		'@stylistic': fixupPluginRules(stylisticEslint),
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
};
