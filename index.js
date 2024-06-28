import javascript from './configs/javascript.js';
import recommended from './configs/recommended.js';
import typescript from './configs/typescript.js';

/**
 * TODO: Import Attributes にしたいけど VS Code の環境によってはエラーになるので今のところ保留
 * @see https://github.com/microsoft/vscode-eslint/issues/1848
 */
import packageConfig from './package.json' assert { type: 'json' };

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
