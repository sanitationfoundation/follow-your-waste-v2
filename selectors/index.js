import * as CONST from '/constants'

/**
 *
 */
export const getData = type => (type ? CONST.DATA[type] : CONST.DATA)
export const getBins = () => CONST.BINS
export const getItems = () => getData('sort').items
export const getItemSize = item => CONST.ITEM_SIZES[item]
export const getStreams = () => Object.keys(getData('follow'))
export const getStreamColor = stream => CONST.STREAM_COLORS[stream]
export const getScenes = stream =>
	stream ? getData('follow')[stream] : []
export const getSceneSlugs = stream => getScenes(stream).map(s => s.slug)
export const getSceneBySlug = (stream, scene) =>
	getScenes(stream).find(s => s.slug === scene)
export const getSceneByIndex = (stream, index) => getScenes(stream)[index]
export const getSceneEnvirons = () => CONST.SCENE_ENVIRONS
export const getLocales = () => Object.keys(CONST.TEXT)
export const getText = (locale, type, slug, ...key) => {
	try {
		const obj = CONST.TEXT[locale][type].find(t => t.slug === slug)
		return obj
			? typeof key[0] === 'boolean'
				? obj
				: obj[key.join('_') || 'text']
			: ''
	} catch (error) {
		console.warn(error)
		return null
	}
}

export const getSections = () => CONST.SECTIONS
