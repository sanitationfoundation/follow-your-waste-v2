import {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
	forwardRef,
} from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ReactSVG } from 'react-svg'
import lottie from 'lottie-web'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'
import FollowFact from './FollowFact'

// const Packery = async () => (await import('lottie-web')).then((m) => m.default)
const FollowScene = forwardRef(
	({ scene, stream, current, ...props }, ref) => {
		// const FollowScene = ({ scene, stream, current, ...props }) => {
		const [openFact, setOpenFact] = useState(null)
		const sceneElemRef = useRef(null)
		const lottieInstRef = useRef(null)
		const { locale } = useStore()
		const {
			slug,
			color,
			orientation,
			// TODO convert animated and looped to boolean early on in pipeline
			animated,
			looped,
			environment,
		} = scene
		const streamColor = getStreamColor(stream)
		// const sceneAudio = new Audio(`/audio/environs/${environment}.wav`)

		const animateScene = () => {
			if (!sceneElemRef.current) return
			// sceneElemRef.current.innerHtml = ''
			lottieInstRef.current = lottie.loadAnimation({
				container: sceneElemRef.current,
				// renderer: 'canvas',
				renderer: 'svg',
				loop: looped === 'TRUE',
				autoplay: false,
				path: `/scenes/animate/${slug}.json`,
			})
		}

		const sceneFacts = [1, 2, 3]
			.map(i => getText(locale, stream, slug, `fact${i}`))
			.filter(str => str.length > 0)

		const handleClick = useCallback(
			i => setOpenFact(i === openFact ? null : i),
			[openFact],
		)

		useEffect(() => {
			if (animated === 'TRUE') animateScene()
			return () =>
				lottieInstRef.current ? lottieInstRef.current.destroy() : false
		}, [])

		useEffect(() => {
			setOpenFact(false)
		}, [current])

		useEffect(() => {
			if (current && lottieInstRef.current) lottieInstRef.current.play()
		}, [current, lottieInstRef])

		// useEffect(() => {
		// 	if(current) {
		// 		// console.log(sceneAudio)
		// 		sceneAudio.play()
		// 	} else {
		// 		sceneAudio.pause()
		// 	}
		// }, [current, sceneAudio])

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
					{animated === 'FALSE' ? (
						<ReactSVG src={`/scenes/static/${slug}.svg`} />
					) : null}
				</Box>
				<Stack
					spacing={2}
					justifyContent='center'
					sx={{
						width: '100%',
						// maxWidth: 500,
						height: '100%',
						position: 'absolute',
						right: 0,
						top: 0,
						overflow: 'hidden',
					}}
				>
					{sceneFacts.map((fact, i) => (
						<FollowFact
							key={i}
							fact={fact}
							color={streamColor}
							open={i === openFact}
							current={current}
							onClick={() => handleClick(i)}
						/>
					))}
				</Stack>
			</Box>
		)
	},
)

FollowScene.displayName = 'FollowScene'

export default FollowScene
