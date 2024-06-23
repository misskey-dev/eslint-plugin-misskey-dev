import recommended from './configs/recommended.js';
// import packageConfig from './package.json' with { type: 'json' };

const plugin = {
	meta: {
		// name: packageConfig.name,
		// version: packageConfig.version,
		name: '@misskey-dev/eslint-plugin',
		version: '1.0.0',
	},
	configs: {
		recommended,
	},
};

export default plugin;
