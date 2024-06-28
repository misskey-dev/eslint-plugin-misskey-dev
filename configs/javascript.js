import { fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';

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

export default {
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
};
