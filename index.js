import recommended from './configs/recommended.js';

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
		recommended,
	},
};

export default plugin;
