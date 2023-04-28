const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	reactStrictMode: true,
	// output: 'standalone',
	// basePath: '/follow-your-waste-v2',
	assetPrefix: isProd ? '/follow-your-waste-v2/' : '',
	// experimental: {
	// 	appDir: true,
	// },
	images: {
		unoptimized: true,
	},
	i18n: {
		locales: ['en', 'es', 'zh'],
		defaultLocale: 'en',
	},
}
