import FOLLOW_DATA from './data/follow.js'
import SORT_DATA from './data/sort.js'
import EN_TEXT from './data/en.js'
import ES_TEXT from './data/es.js'
import ZH_TEXT from './data/zh.js'

export const DATA = {
	follow: FOLLOW_DATA,
	sort: SORT_DATA,
}
export const TEXT = {
	en: EN_TEXT,
	es: ES_TEXT,
	zh: ZH_TEXT,
}
export const SECTIONS = ['follow', 'sort']
export const STREAMS = [
	'glass',
	'landfill',
	'metal',
	'organics',
	'paper',
	'plastic',
]
export const BINS = [
	{
		slug: 'mgp',
		streams: ['metal', 'glass', 'plastic'],
	},
	{ slug: 'paper', streams: ['paper'] },
	{ slug: 'organics', streams: ['organics'] },
	{ slug: 'landfill', streams: ['landfill'] },
]
export const STREAM_COLORS = {
	landfill: 'pink',
	metal: 'blue',
	glass: 'orange',
	paper: 'green',
	plastic: 'red',
	organics: 'teal',
}
export const SCENE_ENVIRONS = ['facility', 'traffic', 'water']
export const ITEM_SIZES = {
	'aluminum-foil': 6,
	'broken-glass': 10,
	cardboard: 15,
	'chip-bag': 8,
	'detergent-bottle': 9,
	'food-can': 5,
	'glass-bottles': 9,
	'glass-jar': 7,
	'milk-carton': 8,
	newspaper: 13,
	'plastic-bag': 12,
	'plastic-bottle': 6,
	'soda-can': 5,
	toothpaste: 10,
	'soiled-paper': 10,
	banana: 13,
}
