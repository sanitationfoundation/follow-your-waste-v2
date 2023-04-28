import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
import HeaderSortButton from './HeaderSortButton'
import HeaderFollowBackButton from './HeaderFollowBackButton'
import HeaderFollowButton from './HeaderFollowButton'
import HeaderLocaleSelector from './HeaderLocaleSelector'

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
				...sx,
			}}
			{...props}
		>
			<Toolbar>
				<Stack
					direction='row'
					alignItems='center'
					spacing={2}
					sx={{
						mr: 'auto',
						'& > div': {
							height: 50,
							my: 'auto !important',
						},
					}}
				>
					<div>
						<Link href='/'>
							<Image
								width={72}
								height={50}
								src='/images/fyw-logo.svg'
								style={{
									width: 'auto',
									height: 50,
								}}
								alt='Follow Your Waste logo'
							/>
						</Link>
					</div>
					<div>
						<Image
							width={128}
							height={50}
							src='/images/sf-logo.png'
							style={{
								width: 'auto',
								height: 50,
							}}
							alt='Sanitation Foundation logo'
						/>
					</div>
					{stream ? <HeaderFollowBackButton /> : null}
				</Stack>
				<Stack direction='row' alignItems='center' spacing={2}>
					{pathname.includes('follow') ? <HeaderSortButton /> : null}
					{pathname.includes('sort') ? <HeaderFollowButton /> : null}
					<HeaderLocaleSelector />
					<Stack direction='row' alignItems='center'>
						<HeaderFullScreen onClick={onFullScreenClick} />
						<HeaderVolume />
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

Header.defaultProps = {
	position: 'relative',
}

export default Header
