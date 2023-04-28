import { useCallback, useEffect, useState, useRef } from 'react'
import useStore from 'hooks'
import { getSceneByIndex, getSceneSlugs } from 'selectors'
import { Audio } from 'common/Audio'

const FollowVoices = ({ stream }) => {
	const { currentScene, pauseVoice, replayVoice, setReplayVoice } =
		useStore()
	const sceneSlugs = getSceneSlugs(stream)
	const currVoice = getSceneByIndex(stream, currentScene)?.slug
	const [prevVoice, setPrevVoice] = useState(null)
	const [newVoice, setNewVoice] = useState(null)
	const audios = useRef({})

	const resetAudio = useCallback(
		slug => {
			const audioElem = audios.current[slug]
			if (audioElem) audioElem.currentTime = 0
		},
		[audios],
	)

	const playAudio = useCallback(
		slug => {
			const audioElem = audios.current[slug]
			if (audioElem) audioElem.play()
			Object.keys(audios.current)
				.filter(e => e !== slug)
				.forEach(pauseAudio)
		},
		[audios],
	)

	const pauseAudio = useCallback(
		slug => {
			const audioElem = audios.current[slug]
			if (audioElem) audioElem.pause()
		},
		[audios],
	)

	useEffect(() => {
		Object.values(audios.current).forEach(audio => (audio.volume = 0.75))
	}, [audios])

	useEffect(() => {
		if (currVoice !== prevVoice) setNewVoice(currVoice)
		setPrevVoice(currVoice)
	}, [currVoice])

	useEffect(() => {
		resetAudio(newVoice)
		if (!pauseVoice) playAudio(newVoice)
	}, [audios, newVoice])

	useEffect(() => {
		if (pauseVoice) {
			pauseAudio(currVoice)
		} else {
			playAudio(currVoice)
		}
	}, [pauseVoice])

	useEffect(() => {
		resetAudio(currVoice)
		setReplayVoice(null)
		playAudio(currVoice)
	}, [replayVoice, currVoice])

	return (
		<>
			{sceneSlugs.map((slug, i) => {
				return (
					<Audio
						key={i}
						type={stream}
						slug={slug}
						ref={ref => (audios.current[slug] = ref)}
					/>
				)
			})}
		</>
	)
}

export default FollowVoices
