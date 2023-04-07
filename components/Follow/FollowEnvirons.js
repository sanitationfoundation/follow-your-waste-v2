import { useCallback, useEffect, useState, useRef } from 'react'
import useStore from 'hooks'
import { getSceneByIndex, getSceneEnvirons } from 'selectors'
import { Audio } from 'common/Audio'

const FollowEnvirons = ({ stream }) => {
	const { currentScene } = useStore()
	const sceneEnvirons = getSceneEnvirons()
	const currEnviron = getSceneByIndex(stream, currentScene)?.environment
	const [prevEnviron, setPrevEnviron] = useState(null)
	const [newEnviron, setNewEnviron] = useState(null)
	const audios = useRef({})

	const playAudio = useCallback(environ => {
		const audioElem = audios.current[environ]
		if(audioElem)
			audioElem.play()
		Object.keys(audios.current)
			.filter(e => e !== environ)
			.forEach(pauseAudio)
	}, [audios])

	const pauseAudio = useCallback(environ => {
		const audioElem = audios.current[environ]
		if(audioElem)
			audioElem.pause()
	}, [audios])

	useEffect(() => {
		if(currEnviron !== prevEnviron)
			setNewEnviron(currEnviron)
		setPrevEnviron(currEnviron)
	}, [currEnviron])

	useEffect(() => {
		playAudio(newEnviron)
	}, [audios, newEnviron])

	return (
		<>
			{sceneEnvirons.map((environ, i) => {
				return (
					<Audio
						key={i}
						type='environs'
						slug={environ}
						loop={true}
						ref={ref => audios.current[environ] = ref}
					/>
				)
			})}
		</>
	)
}

export default FollowEnvirons