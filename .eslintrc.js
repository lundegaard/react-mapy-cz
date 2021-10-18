const { peerDependencies } = require('./core/package.json');

module.exports = {
	extends: ['lundegaard', 'prettier'],
	rules: {
		'import/no-unresolved': [
			'error',
			{ ignore: Object.keys(peerDependencies) },
		],
		'import/order': ['error', { 'newlines-between': 'always' }],
		'no-console': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
	},
};
