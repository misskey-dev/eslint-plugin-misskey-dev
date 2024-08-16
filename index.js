import javascript from './configs/javascript.js';
import recommended from './configs/recommended.js';
import typescript from './configs/typescript.js';

import packageConfig from './package.json' with { type: 'json' };

const plugin = {
	meta: {
		name: packageConfig.name,
		version: packageConfig.version,
	},
	configs: {
		javascript,
		recommended,
		typescript,
	},
};

export default plugin;
