const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	reactStrictMode: true,
	output: 'export',
	basePath: '/follow-your-waste-v2',
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
