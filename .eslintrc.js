module.exports = {
    root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        './index.js',
    ],
};
