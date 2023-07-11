import { useEffect, useState } from 'react'
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
import HeaderBackButton from './HeaderBackButton'
import HeaderFollowBackButton from './HeaderFollowBackButton'
import HeaderLocaleSelector from './HeaderLocaleSelector'
import SortScore from 'components/Sort/SortScore'

const Header = ({ onFullScreenClick, position, sx, ...props }) => {
	const theme = useTheme()
	const router = useRouter()
	const [subPage, setSubPage] = useState(null)
	const [followStream, setFollowStream] = useState(null)

	const getSubPageStr = str => str.substr(str.indexOf('/') + 1)

	useEffect(() => {
		const { pathname, query } = router
		const { stream } = query
		const newSubPage = getSubPageStr(pathname)
		setSubPage(newSubPage)
		setFollowStream(stream)
		const handleRouteChange = pathname => {
			const newSubPage = getSubPageStr(pathname)
			setSubPage(newSubPage)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => router.events.off('routeChangeComplete', handleRouteChange)
	}, [router])

	return (
		<AppBar
			color='orange'
			position={position}
			sx={{
				zIndex: 50,
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
					<Box
						sx={{
							display: {
								xs: 'none',
								md: 'block'
							}
						}}
					>
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
					</Box>
					{subPage ? <HeaderBackButton /> : null}
				</Stack>

				{subPage && subPage.includes('sort') ?
					<SortScore
						sx={{
							display: {
								xs: 'none',
								sm: 'flex'
							}
						}}
					/>
				: null}

				<Stack direction='row' alignItems='center' spacing={2}>
					{/*pathname.includes('follow') ? <HeaderSortButton /> : null*/}
					{/*pathname.includes('sort') ? <HeaderFollowButton /> : null*/}
					{followStream ?
						<HeaderFollowBackButton />
					: null}
					<HeaderLocaleSelector />
					<Stack direction='row' alignItems='center'>
						<HeaderFullScreen
							sx={{
								display: {
									xs: 'none',
									md: 'block'
								}
							}}
							onClick={onFullScreenClick}
						/>
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
