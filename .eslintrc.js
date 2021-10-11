const { peerDependencies } = require('./package.json');

module.exports = {
	extends: ['lundegaard', 'prettier'],
	rules: {
		'import/no-unresolved': [
			'error',
			{ ignore: Object.keys(peerDependencies) },
		],
		'no-console': 'error',
	},
};
