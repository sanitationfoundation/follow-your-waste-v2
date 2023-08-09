import { useCallback, useEffect, useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'
import FollowFact from './FollowFact'

const FollowFacts = ({ stream, scenes, ...props }) => {
	const [openFact, setOpenFact] = useState(null)
	const { locale, currentScene } = useStore()

	const streamColor = getStreamColor(stream)
	const getSceneFacts = useCallback(
		scene =>
			[1, 2, 3]
				.map(i => getText(locale, stream, scene.slug, `fact${i}`))
				.filter(str => str && str.length > 0),
		[locale, stream, currentScene],
	)

	const handleClick = useCallback(
		i => setOpenFact(i === openFact ? null : i),
		[openFact],
	)

	useEffect(() => {
		setOpenFact(null)
	}, [currentScene])

	return (
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
				zIndex: 10,
				overflow: 'hidden',
			}}
			{...props}
		>
			{scenes.map((scene, sceneIndex) =>
				getSceneFacts(scene).map((fact, factIndex) => (
					<FollowFact
						key={factIndex}
						fact={fact}
						color={streamColor}
						open={factIndex === openFact}
						onClick={() => handleClick(factIndex)}
						style={
							sceneIndex !== currentScene
								? {
										display: 'none',
								  }
								: {}
						}
					/>
				)),
			)}
		</Stack>
	)
}

export default FollowFacts
