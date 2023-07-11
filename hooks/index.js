import { create } from 'zustand'
import {
	TEXT,
	FILTER_OPTIONS_VAL,
	FILTER_OPTIONS_DEM,
} from 'constants'

const initialState = {
	text: { TEXT },
	locale: 'en',
	fullScreen: false,
	showWelcome: true,
	// Audio
	mute: false,
	pauseVoice: true,
	replayVoice: false,
	// Sort
	dragging: null,
	opening: null,
	sorted: [],
	score: 0,
	thumbsUp: false,
	// Follow
	currentScene: 0,
}

const useStore = create((set, get) => ({
	...initialState,
	setLocale: locale => set({ locale }),
	setFullScreen: fullScreen => set({ fullScreen }),
	setShowWelcome: showWelcome => set({ showWelcome }),
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
	resetSorted: () =>
		set({ sorted: [] }),
	addScore: () =>
		set({ score: get().score + 1 }),
	setThumbsUp: thumbsUp => set({ thumbsUp }),
	// addRight: () =>
	// 	set(({ score }) => ({
	// 		score: { ...score, right: score.right + 1 },
	// 	})),
	// addWrong: () =>
	// 	set(({ score }) => ({
	// 		score: { ...score, wrong: score.wrong + 1 },
	// 	})),
	resetScore: () =>
		set({ score: 0 }),
	resetAllSort: () =>
		set({
			dragging: null,
			opening: null,
			sorted: [],
			score: 0,
			thumbsUp: false,
		}),
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
