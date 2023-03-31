import FOLLOW_DATA from './follow.js'
import SORT_DATA from './sort.js'
import EN_TEXT from './en.js'
import ES_TEXT from './es.js'
import ZH_TEXT from './zh.js'

export const DATA = {
	follow: FOLLOW_DATA,
	sort: SORT_DATA
}
export const TEXT = {
	en: EN_TEXT,
	es: ES_TEXT,
	zh: ZH_TEXT
}

export const BINS = [
	{ slug: 'mgp', streams: ['metal', 'glass', 'plastic'] },
	{ slug: 'paper', streams: ['paper'] },
	{ slug: 'organics', streams: ['organics'] },
	{ slug: 'landfill', streams: ['landfill'] }
]
export const STREAMS = ['glass', 'landfill', 'metal', 'organics', 'paper', 'plastic']
export const SECTIONS = ['follow','sort']