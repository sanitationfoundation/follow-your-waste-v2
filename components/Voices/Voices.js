import { useCallback, useEffect, useState, useRef } from 'react'
import useStore from 'hooks'
import { getSceneByIndex, getSceneSlugs } from 'selectors'
import { Audio } from 'common/Audio'

const Voices = ({ type, slugs, curr }) => {
	const { currentScene, pauseVoice, replayVoice, setReplayVoice } = useStore()

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
			if (audioElem) {
				audioElem.play().catch(err => {
					console.warn(err)
				})
			}
			Object.keys(audios.current)
				.filter(e => e !== slug)
				.forEach(pauseAudio)
		},
		[audios],
	)

	const pauseAudio = useCallback(
		slug => {
			const audioElem = audios.current[slug]
			try {
				if (audioElem) audioElem.pause()
			} catch (err) {
				console.warn(err)
			}
		},
		[audios],
	)

	useEffect(() => {
		Object.values(audios.current).forEach(audio => (audio.volume = 0.75))
	}, [audios])

	useEffect(() => {
		if (curr !== prevVoice) setNewVoice(curr)
		setPrevVoice(curr)
	}, [curr])

	useEffect(() => {
		resetAudio(newVoice)
		if (!pauseVoice) playAudio(newVoice)
	}, [audios, newVoice])

	useEffect(() => {
		if (pauseVoice) {
			pauseAudio(curr)
		} else {
			playAudio(curr)
		}
	}, [pauseVoice])

	useEffect(() => {
		resetAudio(curr)
		setReplayVoice(null)
		playAudio(curr)
	}, [replayVoice, curr])

	return (
		<>
			{slugs.map((slug, i) => {
				return (
					<Audio
						key={i}
						type={type}
						slug={slug}
						ref={ref => (audios.current[slug] = ref)}
					/>
				)
			})}
		</>
	)
}

Voices.defaultProps = {
	slugs: [],
}

export default Voices
