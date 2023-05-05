const { peerDependencies } = require('./core/package.json');

module.exports = {
	extends: ['lundegaard', 'prettier'],
	ignorePatterns: ['core/src/typings/index.d.ts'],
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
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.tsx', '.js', '.jsx'],
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'prettier',
			],
		},
	],
};
