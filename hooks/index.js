import { create } from 'zustand'
import {
	EN,
	ES,
	ZH,
	FILTER_OPTIONS_VAL,
	FILTER_OPTIONS_DEM,
} from 'constants'

const initialState = {
	text: {
		en: EN,
		es: ES,
		zh: ZH,
	},
	locale: 'en',
	fullScreen: false,
	intro: true,
	// Audio
	mute: false,
	// Sort
	dragging: null,
	opening: null,
	sorted: [],
	// Follow
	currentScene: 0,
}

const useStore = create((set, get) => ({
	...initialState,
	setLocale: (locale) => set({ locale }),
	setFullScreen: (fullScreen) => set({ fullScreen }),
	setIntro: (intro) => set({ intro }),
	// Audio
	setMute: (mute) => set({ mute }),
	// Sort
	setDragging: (dragging) => set({ dragging }),
	setOpening: (opening) => set({ opening }),
	setSorted: (sorted) => set({ sorted }),
	addSorted: (item) =>
		set((state) => ({
			sorted: [...state.sorted, item],
		})),
	// Follow
	setCurrentScene: (currentScene) => set({ currentScene }),
	nextScene: () =>
		set(state => ({
			currentScene: state.currentScene + 1,
		})),
	prevScene: () =>
		set(state => ({
			currentScene: state.currentScene - 1,
		})),
}))

export default useStore
