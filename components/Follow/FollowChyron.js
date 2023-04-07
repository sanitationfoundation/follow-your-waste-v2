import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ReplayIcon from '@mui/icons-material/Replay'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'

const PLAYBACK_ICON_SIZE = 20

const FollowChyronCaption = ({ stream, scene }) => {
	const { locale } = useStore()
	const text = getText(locale, stream, scene.slug, true)
	return <Typography variant="body2">{text.caption}</Typography>
}

const FollowChyronPlaybackButton = ({ color, ...props }) => {
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
				'svg': {
					width: PLAYBACK_ICON_SIZE * .75,
					height: PLAYBACK_ICON_SIZE * .75
				}
			}}
			{...props}
		>
			
		</IconButton>
	)
}

const FollowChyron = ({ stream, scenes, ...props }) => {
	const theme = useTheme()
	const { locale, currentScene, setCurrentScene, nextScene, prevScene, pauseVoice, setPauseVoice, setReplayVoice } =
		useStore()
	// const isCurrent = useCallback(scene => scenes.indexOf(scene) === currentScene, [currentScene])
	const scene = scenes[currentScene]
	const color = getStreamColor(stream) || 'primary'

	const togglePauseVoice = () => {
		setPauseVoice(!pauseVoice)
	}

	const replayVoice = () => {
		setReplayVoice(true)
		setPauseVoice(false)
	}

	return (
		<Box
			sx={{
				width: { sm: 700 },
				// height: { sm: 200 },
				left: { sm: '50%' },
				bottom: { sm: 20 },
				position: 'fixed',
				transform: `translateX(-50%)`,
				borderRadius: 10,
				borderColor: color ? theme.palette[color].main : '',
				borderWidth: 3,
				borderStyle: 'solid',
				backgroundColor: alpha(theme.palette.secondary.main, 0.75),
				color: 'primary.main',
			}}
		>
			<IconButton
				size="large"
				color="primary"
				sx={{
					position: 'absolute',
					right: '100%',
					top: '50%',
					transform: 'translate(-40px, -55%)',
				}}
				onClick={prevScene}
			>
				<KeyboardArrowLeftIcon fontSize="large" />
			</IconButton>
			<IconButton
				size="large"
				color="primary"
				sx={{
					position: 'absolute',
					left: '100%',
					top: '50%',
					transform: 'translate(15px, -50%)',
				}}
				onClick={nextScene}
			>
				<KeyboardArrowRightIcon fontSize="large" />
			</IconButton>
			<Box
				sx={{
					width: 75,
					height: 'auto',
					position: 'absolute',
					left: 0,
					top: '50%',
					transform: `translate(${-40}px, -50%)`,
				}}>
				<img
					alt=""
					src={`/images/workers/${stream}.png`}
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
					<FollowChyronPlaybackButton
						color={color}
						onClick={togglePauseVoice}>
						{pauseVoice
							? <PlayArrowIcon />
							: <PauseIcon />
						}
					</FollowChyronPlaybackButton>

					<FollowChyronPlaybackButton
						color={color}
						onClick={replayVoice}>
						<ReplayIcon />
					</FollowChyronPlaybackButton>
				</Stack>

			</Box>
			<Box
				sx={{
					p: 2,
					pl: 8,
				}}
			>
				{scene ? (
					<FollowChyronCaption stream={stream} scene={scene} />
				) : null}
			</Box>
		</Box>
	)
}

export default FollowChyron
