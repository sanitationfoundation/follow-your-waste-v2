import useStore from 'hooks'
import { getSceneByIndex, getSceneSlugs } from 'selectors'
import { Voices } from 'components/Voices'

const FollowVoices = ({ stream }) => {
	const { currentScene } = useStore()
	const sceneSlugs = getSceneSlugs(stream)
	const currVoice = getSceneByIndex(stream, currentScene)?.slug

	return <Voices type={stream} slugs={sceneSlugs} curr={currVoice} />
}

export default FollowVoices
