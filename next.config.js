const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	i18n: {
		locales: ['en', 'es', 'zh'],
		defaultLocale: 'en',
	},
}
