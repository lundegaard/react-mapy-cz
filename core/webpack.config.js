const path = require('path');

const packageRoot = './';

const targets = {
	commonjs: 'commonjs',
	umd: 'umd',
	module: 'module',
};

const outputPathsByTarget = {
	[targets.commonjs]: 'lib',
	[targets.umd]: 'dist',
	[targets.module]: 'es',
};

const libraryTargetsByTarget = {
	[targets.commonjs]: 'commonjs2',
	[targets.umd]: 'umd',
	[targets.module]: 'module',
};

module.exports = Object.values(targets).map((target) => ({
	mode: 'production',
	entry: path.resolve(packageRoot, 'src/index.ts'),
	output: {
		path: path.resolve(packageRoot, outputPathsByTarget[target]),
		filename: `mapy-cz-react.${target}.js`,
		library: {
			type: libraryTargetsByTarget[target],
			umdNamedDefine: true,
		},
		environment: {
			module: true,
		},
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	externals: {
		react: 'react',
	},
	experiments: {
		outputModule: libraryTargetsByTarget[target] === 'module',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						rootMode: 'upward',
					},
				},
			},
			{
				test: /\.css$/,
				// use: ['style-loader', 'css-loader'],
				use: [
					{
						loader: 'style-loader',
						// options: {
						// 	insert: 'body',
						// },
					},
					'css-loader',
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
}));
