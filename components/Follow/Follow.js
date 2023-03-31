import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useEmblaCarousel from 'embla-carousel-react'

import useStore from 'hooks'
import { getText, getScenes } from 'selectors'
import FollowProgress from './FollowProgress'
import FollowScene from './FollowScene'

const KEY_CODE_ARROW_LEFT = 37
const KEY_CODE_ARROW_RIGHT = 39

const Follow = ({ stream, ...props }) => {
	const [emblaCurrentScene, setEmblaCurrentScene] = useState(0)
	const { currentScene, setCurrentScene, nextScene, prevScene } = useStore()
	const scenes = getScenes(stream)
	const [emblaRef, emblaApi] = useEmblaCarousel({
		// speed: 10
	})

	const handleEmblaSelect = () =>
		setEmblaCurrentScene(emblaApi.selectedScrollSnap())
	
	useEffect(() => {
		const handleKeyDown = ({ keyCode }) => {
			if (keyCode === KEY_CODE_ARROW_RIGHT && currentScene < scenes.length - 1)
				nextScene()
			if (keyCode === KEY_CODE_ARROW_LEFT && currentScene >= 1)
				prevScene()
		}

		document.onkeydown = handleKeyDown
	}, [currentScene])

	useEffect(() => {
		if (currentScene !== emblaCurrentScene) {
			setCurrentScene(emblaCurrentScene)
		}
	}, [emblaCurrentScene])

	useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(currentScene)
    }
  }, [currentScene])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', handleEmblaSelect)
    }
  }, [emblaApi, handleEmblaSelect])
	
	return (
		<>
			<FollowProgress
				stream={stream}
				scenes={scenes} />
			<Box
				className='embla'
				sx={{
					flex: 1
				}}
				ref={emblaRef}>
				<Stack
					className='embla__container'
					direction='row'>
					{scenes.map((scene,i) =>
						<FollowScene
							key={i}
							scene={scene}
							current={i === emblaCurrentScene}
							className='embla__slide' />
					)}
				</Stack>
			</Box>
		</>
	)
}

export default Follow