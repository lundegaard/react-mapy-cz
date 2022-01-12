const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const appTitle = 'React Mapy.cz';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: appTitle,
		tagline: 'Amazing React wrapper of mapy.cz API',
		url: 'https://your-docusaurus-test-site.com',
		baseUrl: '/react-mapy-cz/',
		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',
		favicon: 'img/favicon.png',
		organizationName: 'lundegaard', // Usually your GitHub org/user name.
		projectName: 'react-mapy-cz', // Usually your repo name.
		trailingSlash: false,
		presets: [
			[
				'@docusaurus/preset-classic',
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve('./sidebars.js'),
						editUrl: 'https://github.com/lundegaard/react-mapy-cz',
					},
					theme: {
						customCss: require.resolve('./src/css/custom.css'),
					},
				}),
			],
		],
		themes: ['@docusaurus/theme-live-codeblock'],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				navbar: {
					title: appTitle,
					logo: {
						alt: appTitle,
						src: 'img/logo.svg',
					},
					items: [
						{
							type: 'doc',
							docId: 'getting-started',
							position: 'left',
							label: 'Getting started',
						},
						{
							href: 'https://github.com/lundegaard/react-mapy-cz',
							label: 'GitHub',
							position: 'right',
						},
					],
				},
				footer: {
					style: 'dark',
					links: [
						{
							title: 'Docs',
							items: [
								{
									label: 'Getting Started',
									to: '/docs/getting-started',
								},
								{
									label: 'Tutorial',
									to: '/docs/tutorial/quick-start',
								},
								{
									label: 'API reference',
									to: '/docs/api/map-provider',
								},
							],
						},
						{
							title: 'Community',
							items: [
								{
									label: 'Twitter',
									href: 'https://twitter.com/lundegaardjerry?lang=en',
								},
							],
						},
						{
							title: 'More',
							items: [
								{
									label: 'Company website',
									href: 'https://www.lundegaard.eu/',
								},
								{
									label: 'GitHub',
									href: 'https://github.com/lundegaard/react-mapy-cz',
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} Lundegaard a.s.`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}),
	}
);
