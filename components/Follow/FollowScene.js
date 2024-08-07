import {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
	forwardRef,
} from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ReactSVG } from 'react-svg'
// import lottie from 'lottie-web'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'

const FollowScene = forwardRef(({ scene, stream, current, ...props }, ref) => {
	const lottieRef = useRef(null)
	const lottieInstRef = useRef(null)
	const sceneElemRef = useRef(null)
	const { locale } = useStore()
	const {
		slug,
		color,
		orientation,
		animated,
		looped,
		environment,
	} = scene

	useEffect(() => {
		const animateScene = async () => {
			const Lottie = await import('lottie-web')
			if (!sceneElemRef.current || !Lottie || lottieInstRef.current) return
			lottieInstRef.current = Lottie.loadAnimation({
				container: sceneElemRef.current,
				renderer: 'svg',
				loop: looped,
				autoplay: false,
				path: `/scenes/animate/${slug}.json`,
			})
		}

		if (animated) animateScene()
		return () =>
			lottieInstRef.current ? lottieInstRef.current.destroy() : false
	}, [])

	useEffect(() => {
		if (current && lottieInstRef.current) {
			if(lottieInstRef.current.isPaused) {
				lottieInstRef.current.play()
			} else {
				lottieInstRef.current.goToAndPlay(0)
			}
		}
	}, [current, lottieInstRef])

	return (
		<Box
			ref={ref}
			sx={{
				maxWidth: '100vw',
				flex: '0 0 100vw',
				overflow: 'hidden',
				bgcolor: `${color}.main`,
				position: 'relative',
			}}
			{...props}
		>
			<Box
				ref={sceneElemRef}
				sx={{
					height: '100vh',
					pointerEvents: 'none',
					display: 'flex',
					'& > *': {
						m: 'auto',
					},
					'& svg': {
						...(orientation === 'width'
							? {
									width: '100% !important',
									height: 'auto !important',
							  }
							: {}),
						...(orientation === 'height'
							? {
									width: 'auto !important',
									height: '100% !important',
									ml: 'calc(-87.5vh - -50vw)!important',
									position: 'absolute',
									top: 0,
									left: 0,
							  }
							: {}),
					},
				}}
			>
				{!animated ? (
					<ReactSVG src={`/scenes/static/${slug}.svg`} />
				) : null}
			</Box>
		</Box>
	)
})

FollowScene.displayName = 'FollowScene'

export default FollowScene
