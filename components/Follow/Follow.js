import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useEmblaCarousel from 'embla-carousel-react'

import useStore from 'hooks'
import { getText, getScenes, getSceneByIndex, getSceneSlugs } from 'selectors'
import FollowProgress from './FollowProgress'
import FollowScene from './FollowScene'
import FollowChyron from './FollowChyron'
import FollowEnd from './FollowEnd'
import FollowEnvirons from './FollowEnvirons'
import FollowVoices from './FollowVoices'

const KEY_CODE_ARROW_LEFT = 37
const KEY_CODE_ARROW_RIGHT = 39

const Follow = ({ stream, ...props }) => {
	const [emblaScrolling, setEmblaScrolling] = useState(false)
	const [emblaCurrentScene, setEmblaCurrentScene] = useState(0)
	const [emblaSlides, setEmblaSlides] = useState([])
	const [mouseDown, setMouseDown] = useState(null)
	const { currentScene, setCurrentScene, nextScene, prevScene } =
		useStore()
	const scenes = getScenes(stream)
	const sceneSlugs = getSceneSlugs(stream)
	const currVoice = getSceneByIndex(stream, currentScene)?.slug

	const [emblaRef, emblaApi] = useEmblaCarousel({})
	const isCurrent = useCallback(i => i === currentScene, [currentScene])

	const handleEmblaSelect = () =>
		setEmblaCurrentScene(emblaApi.selectedScrollSnap())

	const handleEmblaScroll = () => setEmblaScrolling(true)

	const handleEmblaSettle = () => setEmblaScrolling(false)

	useEffect(() => {
		const handleMouseDown = () => setMouseDown(true)
		const handleMouseUp = () => setMouseDown(false)
		document.onmousedown = handleMouseDown
		document.onmouseup = handleMouseUp
	}, [])

	useEffect(() => {
		if (emblaApi) emblaApi.reInit()
	}, [emblaApi, scenes])

	useEffect(() => {
		const handleKeyDown = ({ keyCode }) => {
			if (
				keyCode === KEY_CODE_ARROW_RIGHT &&
				currentScene < scenes.length - 1
			)
				nextScene()
			if (keyCode === KEY_CODE_ARROW_LEFT && currentScene >= 1) prevScene()
		}

		document.onkeydown = handleKeyDown
	}, [currentScene, scenes])

	useEffect(() => {
		if (currentScene !== emblaCurrentScene)
			setCurrentScene(emblaCurrentScene)
	}, [emblaCurrentScene, emblaScrolling])

	useEffect(() => {
		if (emblaApi && !mouseDown) emblaApi.scrollTo(currentScene)
	}, [emblaApi, emblaScrolling, currentScene, mouseDown])

	useEffect(() => {
		if (emblaApi) {
			emblaApi.off('select', handleEmblaSelect)
			emblaApi.on('select', handleEmblaSelect)
		}
	}, [emblaApi, handleEmblaSelect])

	useEffect(() => {
		if (emblaApi) {
			emblaApi.off('scroll', handleEmblaScroll)
			emblaApi.off('settle', handleEmblaSettle)
			emblaApi.on('scroll', handleEmblaScroll)
			emblaApi.on('settle', handleEmblaSettle)
		}
	}, [emblaApi, handleEmblaScroll, handleEmblaScroll])

	return (
		<>
			<FollowProgress stream={stream} scenes={scenes} />
			<Box
				className='embla'
				sx={{
					flex: 1,
				}}
				ref={emblaRef}
			>
				<Stack className='embla__container' direction='row'>
					{scenes.map((scene, i) => (
						<FollowScene
							key={i}
							scene={scene}
							stream={stream}
							current={isCurrent(i)}
							className='embla__slide'
						/>
					))}
					<FollowEnd stream={stream} className='embla__slide' />
				</Stack>
			</Box>
			<FollowChyron stream={stream} scenes={scenes} />
			<FollowEnvirons stream={stream} />
			<FollowVoices stream={stream} />
		</>
	)
}

export default Follow
