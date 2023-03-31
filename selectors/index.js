import * as CONST from '/constants'

/**
 * 
 */
export const getData = type => type
	? CONST.DATA[type]
	: CONST.DATA
export const getItems = () => getData('items')
export const getBins = () => getData('bins')
export const getStreams = () => getData('streams')
export const getScenes = stream => stream ? getData(stream) : []

export const getLangs = () => Object.keys(CONST.TEXT)
export const getText = (lang, cat, slug, key) => {
	const obj = CONST.TEXT[lang][cat].find(t => t.slug === slug)
	return obj ? obj[key || 'text'] : ''
}

export const getSections = () => CONST.SECTIONS