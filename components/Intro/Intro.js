import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { getText } from 'selectors'
import useStore from 'hooks'

const Intro = ({ ...props }) => {
	const theme = useTheme()
	const { locale, showIntro, setShowIntro } = useStore()
	const [drive, setDrive] = useState(false)

	const onClose = () => {
		setShowIntro(false)
	}

	useEffect(() => {
		setDrive(true)
	}, [])

	return (
		<Fade in={showIntro}>
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{
					p: 2,
					width: '100%',
					height: '100%',
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 10,
					bgcolor: 'orange.main',
					'& img': {
						width: '100%',
						maxWidth: 600
					}
				}}
			>
				<Image
					width={737}
					height={427}
					src='images/fyw-logo.svg'
					alt='Follow Your Waste logo'
				/>

				<Typography align='center'>
					{getText(locale, 'system', 'tagline')}
				</Typography>


				<Box
					sx={{
						position: 'fixed',
						bottom: 0,
						left: 0,
						transition: theme.transitions.create(['transform'], {
							duration: 7000,
							easing: 'linear'
						})
					}}
					style={{
						transform: drive
							? 'translateX(calc(100vw + 100%))'
							: 'translateX(-100%)'
					}}>
					<Image
						width={300}
						height={120}
						src='images/loading.png'
						alt='Illustration of DSNY collection truck'
					/>
				</Box>

				<Button
					variant='contained'
					color='green'
					sx={{
						mt: 2
					}}
					onClick={onClose}>
					{getText(locale, 'system', 'get_started')}
				</Button>
			</Stack>
		</Fade>
	)
}

export default Intro
