import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { default as theme } from '../theme'
import createEmotionCache from '../createEmotionCache'
import '../styles/globals.css'
import useStore from '../hooks'

const clientSideEmotionCache = createEmotionCache()

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
	const router = useRouter()
	const { locale, setLocale } = useStore()

	useEffect(() => {
		setLocale(router.locale)
	}, [router])

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default App
