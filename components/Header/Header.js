import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import HeaderFullScreen from './HeaderFullScreen'
import HeaderVolume from './HeaderVolume'
import HeaderGameButton from './HeaderGameButton'
import HeaderJourneyBackButton from './HeaderJourneyBackButton'
import HeaderJourneyButton from './HeaderJourneyButton'
import HeaderLangSelector from './HeaderLangSelector'


const Header = ({ onFullScreenClick, position, sx, ...props }) => {
	const theme = useTheme()
	const router = useRouter()
  const { pathname, query } = router
  const { stream } = query

	return (
		<AppBar
			color='orange'
			position={position}
			sx={{
				zIndex: 30,
				boxShadow: 'none',
				...sx
			}}
			{...props}
			>
			<Toolbar>
				<Stack
					direction='row'
					alignItems='center'
					spacing={2}
					sx={{
						mr: 'auto'
					}}
				>
					<Image
						width={400}
						height={156}
						src='/images/logo.png'
						style={{
							width: 'auto',
							height: 54,
							marginRight: 'auto'
						}}
						alt='Sanitation Foundation logo'
					/>
					{stream ? <HeaderJourneyBackButton /> : null}
				</Stack>
				<Stack
					direction='row'
					alignItems='center'
					spacing={2}
				>
					{pathname.includes('journey') ? <HeaderGameButton /> : null}
					{pathname.includes('game') ? <HeaderJourneyButton /> : null}
					<HeaderLangSelector />
					<Stack
						direction='row'
						alignItems='center'
					>
						<HeaderFullScreen onClick={onFullScreenClick} />
						<HeaderVolume />
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

Header.defaultProps = {
	position: 'relative'
}

export default Header
