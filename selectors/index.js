import * as CONST from '/constants'

/**
 * 
 */
export const getData = type => type
	? CONST.DATA[type]
	: CONST.DATA
export const getBins = () => CONST.BINS
export const getItems = () => getData('sort').items
export const getStreams = () => Object.keys(getData('follow'))
export const getScenes = stream => stream ? getData('follow')[stream] : []

export const getLangs = () => Object.keys(CONST.TEXT)
export const getText = (lang, type, slug, key) => {
	const obj = CONST.TEXT[lang][type].find(t => t.slug === slug)
	return obj ? obj[key || 'text'] : ''
}

export const getSections = () => CONST.SECTIONS