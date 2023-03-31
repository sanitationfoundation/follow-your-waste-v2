import { create } from 'zustand';
import { EN, ES, ZH, FILTER_OPTIONS_VAL, FILTER_OPTIONS_DEM } from 'constants';

const initialState = {
	text: {
		en: EN,
		es: ES,
		zh: ZH,
	},
	lang: 'en',
	fullScreen: false,
	intro: true,
	// Audio
	mute: false,
	// Game
	dragging: null,
	opening: null,
	sorted: [],
	// Journey
	currentScene: 0,
};

const useStore = create((set, get) => ({
	...initialState,
	setLang: lang => set({ lang }),
	setFullScreen: fullScreen => set({ fullScreen }),
	setIntro: intro => set({ intro }),
	// Audio
	setMute: mute => set({ mute }),
	// Game
	setDragging: dragging => set({ dragging }),
	setOpening: opening => set({ opening }),
	setSorted: sorted => set({ sorted }),
	addSorted: item => set(state => ({
		sorted: [...state.sorted, item]
	})),
	// Journey
	setCurrentScene: currentScene => set({ currentScene }),
	nextScene: () => set(state => ({
		currentScene: state.currentScene + 1
	})),
	prevScene: () => set(state => ({
		currentScene: state.currentScene - 1
	}))
}));

export default useStore;
