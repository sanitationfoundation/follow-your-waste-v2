import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { default as theme } from '../theme';
import createEmotionCache from '../createEmotionCache';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function App({
	emotionCache = clientSideEmotionCache,
	Component,
	pageProps
}) {
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;
