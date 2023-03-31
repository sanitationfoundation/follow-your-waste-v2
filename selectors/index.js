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

export const getLocales = () => Object.keys(CONST.TEXT)
export const getText = (locale, type, slug, key) => {
	const obj = CONST.TEXT[locale][type].find(t => t.slug === slug)
	return obj ? obj[key || 'text'] : ''
}

export const getSections = () => CONST.SECTIONS