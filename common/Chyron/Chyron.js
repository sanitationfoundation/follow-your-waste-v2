import { forwardRef } from 'react'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Fade from '@mui/material/Fade'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ReplayIcon from '@mui/icons-material/Replay'

import useStore from 'hooks'
import { getText } from 'selectors'

const PLAYBACK_ICON_SIZE = 20

const ChyronPlaybackButton = ({ color, ...props }) => {
	const theme = useTheme()
	return (
		<IconButton
			size='small'
			color='primary'
			sx={{
				width: PLAYBACK_ICON_SIZE,
				height: PLAYBACK_ICON_SIZE,
				borderColor: alpha(theme.palette[color].main, 0.75),
				borderWidth: 1,
				borderStyle: 'solid',
				bgcolor: `${color}.dark`,
				'&:hover': {
					backgroundColor: alpha(theme.palette[color].dark, 0.75),
				},
				svg: {
					pointerEvents: 'none',
					width: PLAYBACK_ICON_SIZE * 0.75,
					height: PLAYBACK_ICON_SIZE * 0.75,
				},
			}}
			{...props}
		/>
	)
}

const Chyron = forwardRef(({ open, caption, color, imgSrc, float, onClose, children, sx, ...props }, ref) => {
	const theme = useTheme()
	const {
		locale,
		currentScene,
		nextScene,
		prevScene,
		pauseVoice,
		setPauseVoice,
		setReplayVoice,
		setMute
	} = useStore()

	const togglePauseVoice = () => {
		if(pauseVoice) setMute(false)
		setPauseVoice(!pauseVoice)
	}

	const replayVoice = () => {
		setMute(false)
		setReplayVoice(true)
		setPauseVoice(false)
	}

	return (
		<Fade appear in={open}>
			<Box
				sx={{
					width: {
						xs: '80%',
						sm: 500,
						md: 700
					},
					my: {
						sm: 6
					},
					mx: 'auto',
					left: float ? {
						xs: 0,
						sm: '50%'
					} : null,
					bottom: float ? 0 : null,
					position: float ? 'fixed' : 'relative',
					transform: float ? {
						xs: 'unset',
						sm: `translateX(-50%)`
					} : null,
					borderRadius: 10,
					borderColor: color ? theme.palette[color].main : '',
					borderWidth: 3,
					borderStyle: 'solid',
					backgroundColor: alpha(theme.palette.secondary.main, 0.75),
					color: 'primary.main',
					pointerEvents: 'all',
					...sx
				}}
				ref={ref}
				{...props}
			>
				{children}
				{imgSrc ?
					<Box
						sx={{
							width: 75,
							height: 'auto',
							position: 'absolute',
							left: 0,
							top: '50%',
							transform: `translate(${-40}px, -50%)`,
							display: {
								xs: 'none',
								sm: 'block'
							}
						}}
					>
						<img
							alt=''
							src={imgSrc}
							style={{
								width: 75,
								height: 'auto',
							}}
						/>
						<Stack
							spacing={0.5}
							sx={{
								position: 'absolute',
								left: '100%',
								top: '50%',
								transform: 'translate(-50%, -50%)',
							}}
						>
							<ChyronPlaybackButton
								color={color}
								onClick={togglePauseVoice}
							>
								{pauseVoice ? <PlayArrowIcon /> : <PauseIcon />}
							</ChyronPlaybackButton>

							<ChyronPlaybackButton color={color} onClick={replayVoice}>
								<ReplayIcon />
							</ChyronPlaybackButton>
						</Stack>
					</Box>
				: null}
				<Box
					sx={{
						p: 2,
						pl: {
							xs: 2,
							sm: 8
						},
					}}
				>
					{caption ?
						<Typography variant='body2'>
							{caption}
						</Typography>
					: null}
					{onClose ?
						<Stack
							mt={1}
							direction='row'
							alignContent='center'
						>
							<Button
								variant='contained'
								color={color}
								onClick={onClose}
								sx={{
									mx: {
										xs: 'auto',
										sm: 0
									}
								}}
							>
								{getText(locale, 'system', 'okay')}
							</Button>
						</Stack>
					: null}
				</Box>
			</Box>
		</Fade>
	)
})

Chyron.defaultProps = {
	open: true,
	float: true,
	color: 'primary'
}

export default Chyron
