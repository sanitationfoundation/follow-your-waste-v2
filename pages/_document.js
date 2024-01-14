//Config from https://blog.logrocket.com/getting-started-with-mui-and-next-js/
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
// import { GoogleAnalytics } from '@next/third-parties/google'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '../createEmotionCache'

const { GOOGLE_ANALYTICS } = process.env

export default class CpalDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>{this.props.emotionStyleTags}</Head>
				<body>
					<Main />
					<NextScript />
					<Script
						id='ga1'
						strategy='lazyOnload'
						src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}
					/>

					<Script
						id='ga2'
						strategy='lazyOnload'
					>
						{`window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', ${GOOGLE_ANALYTICS});`}
					</Script>
				</body>
			</Html>
		)
	}
}

CpalDocument.getInitialProps = async ctx => {
	const originalRenderPage = ctx.renderPage

	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />
				},
		})

	const initialProps = await Document.getInitialProps(ctx)

	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStyleTags = emotionStyles.styles.map(style => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			dangerouslySetInnerHTML={{
				__html: style.css,
			}}
		/>
	))

	return {
		...initialProps,
		emotionStyleTags,
	}
}
