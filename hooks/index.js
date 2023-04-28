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
	showIntro: true,
	// Audio
	mute: false,
	pauseVoice: false,
	replayVoice: false,
	// Sort
	dragging: null,
	opening: null,
	sorted: [],
	score: {
		wrong: 0,
		right: 0,
	},
	// Follow
	currentScene: 0,
}

const useStore = create((set, get) => ({
	...initialState,
	setLocale: locale => set({ locale }),
	setFullScreen: fullScreen => set({ fullScreen }),
	setShowIntro: showIntro => set({ showIntro }),
	// Audio
	setMute: mute => set({ mute }),
	setPauseVoice: pauseVoice => set({ pauseVoice }),
	setReplayVoice: replayVoice => set({ replayVoice }),
	// Sort
	setDragging: dragging => set({ dragging }),
	setOpening: opening => set({ opening }),
	setSorted: sorted => set({ sorted }),
	addSorted: item =>
		set(state => ({
			sorted: [...state.sorted, item],
		})),
	addRight: () =>
		set(({ score }) => ({
			score: { ...score, right: score.right + 1 },
		})),
	addWrong: () =>
		set(({ score }) => ({
			score: { ...score, wrong: score.wrong + 1 },
		})),
	// Follow
	setCurrentScene: currentScene => set({ currentScene }),
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
