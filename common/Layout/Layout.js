import { useEffect } from 'react'
import Head from 'next/head'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import useStore from 'hooks'
import { Header } from 'components'

const Layout = ({ children, sx, HeaderProps, ...props }) => {
	const fullScreenHandle = useFullScreenHandle()
	const { setFullScreen } = useStore()

	const onFullScreenClick = () => {
		if (fullScreenHandle.active) {
			fullScreenHandle.exit()
		} else {
			fullScreenHandle.enter()
		}
	}

	const onFullScreenChange = state => {
		setFullScreen(state)
	}

	return (
		<>
			<Head>
				<title>Follow Your Waste</title>
				<meta name="description" content="" />
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>
			<FullScreen handle={fullScreenHandle} onChange={onFullScreenChange}>
				<Stack
					sx={{
						height: '100%',
						...sx,
					}}
				>
					<Header onFullScreenClick={onFullScreenClick} {...HeaderProps} />
					{children}
				</Stack>
			</FullScreen>
		</>
	)
}

Layout.defaultProps = {
	sx: {},
	HeaderProps: {},
}

export default Layout
