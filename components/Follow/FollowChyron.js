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

import { Chyron } from 'common/Chyron'

const FollowChyron = ({ stream, scenes, ...props }) => {
	const theme = useTheme()
	const { locale, currentScene, nextScene, prevScene } = useStore()
	// const isCurrent = useCallback(scene => scenes.indexOf(scene) === currentScene, [currentScene])
	const scene = scenes[currentScene]
	const caption = scene
		? getText(locale, stream, scene.slug, true)?.caption
		: null
	const color = getStreamColor(stream)
	const imgScr = scene ? `/images/workers/${stream}.png` : null

	return (
		<>
			{caption ? (
				<Chyron
					open
					caption={caption}
					color={color}
					imgSrc={imgScr}
					canMinimize={true}
					sx={{
						width: {
							xs: '100%',
							sm: 500,
							md: 700,
						},
						borderRadius: {
							xs: theme.spacing(5, 5, 0, 0),
							sm: 10,
						},
						borderBottomWidth: {
							xs: 0,
							sm: 3,
						},
					}}
				>
					<IconButton
						size='large'
						color='primary'
						sx={{
							position: 'absolute',
							right: '100%',
							top: '50%',
							transform: 'translate(-40px, -55%)',
						}}
						onClick={prevScene}
					>
						<KeyboardArrowLeftIcon fontSize='large' />
					</IconButton>
					<IconButton
						size='large'
						color='primary'
						sx={{
							position: 'absolute',
							left: '100%',
							top: '50%',
							transform: 'translate(15px, -50%)',
						}}
						onClick={nextScene}
					>
						<KeyboardArrowRightIcon fontSize='large' />
					</IconButton>
				</Chyron>
			) : null}
		</>
	)
}

export default FollowChyron
