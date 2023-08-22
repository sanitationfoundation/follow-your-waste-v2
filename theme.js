import { createTheme, alpha } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

const DARK = '#000'
const LIGHT = '#FFF'

const BLUE = '#043FAB'
const TEAL = '#3f8DBA'
const GREEN = '#00995c'
const YELLOW = '#F2B621'
const ORANGE = '#FC652C'
const PINK = '#E17B98'
const RED = '#B32618'
const LIME = '#ADF940'
const FOREST = '#036A47'
const LIGHTGREEN = '#00AA64'
const BLACK = '#000000'

const BLUE_DARK = '#012E7F'
const TEAL_DARK = '#01779E'
const GREEN_DARK = '#025237'
const YELLOW_DARK = '#AC8118'
const ORANGE_DARK = '#BE4216'
const PINK_DARK = '#9E465F'
const RED_DARK = '#861C11'

const BLUE_LIGHT = '#AFCBFD'
const TEAL_LIGHT = '#D5E7F1'
const GREEN_LIGHT = '#E0FFF3'
const YELLOW_LIGHT = '#FAE1A3'
const ORANGE_LIGHT = '#FED3C3'
const PINK_LIGHT = '#F5D1DB'
const RED_LIGHT = '#F8D1CE'

const theme = createTheme({
	palette: {
		primary: {
			main: LIGHT,
			contrastText: DARK,
		},
		secondary: {
			main: DARK,
			contrastText: LIGHT,
		},
		blue: {
			main: BLUE,
			dark: BLUE_DARK,
			light: BLUE_LIGHT,
		},
		teal: {
			main: TEAL,
			dark: TEAL_DARK,
			light: TEAL_LIGHT,
		},
		green: {
			main: GREEN,
			dark: GREEN_DARK,
			light: GREEN_LIGHT,
		},
		yellow: {
			main: YELLOW,
			dark: YELLOW_DARK,
			light: YELLOW_LIGHT,
			contrastText: DARK,
		},
		orange: {
			main: ORANGE,
			dark: ORANGE_DARK,
			light: ORANGE_LIGHT,
		},
		pink: {
			main: PINK,
			dark: PINK_DARK,
			light: PINK_LIGHT,
		},
		red: {
			main: RED,
			dark: RED_DARK,
			light: RED_LIGHT,
		},
		lime: {
			main: LIME,
		},
		forest: {
			main: FOREST,
		},
		lightgreen: {
			main: LIGHTGREEN,
		},
		black: {
			main: BLACK,
		},
	},
	typography: {
		fontFamily: ['"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
		body1: {
			fontSize: 16,
			fontWeight: 500,
		},
		body2: {
			fontSize: 20,
			fontWeight: 500,
		},
		h1: {
			fontSize: 34,
			fontWeight: 700,
		},
		h2: {
			fontSize: 28,
			fontWeight: 700,
		},
		h3: {
			fontSize: 24,
			fontWeight: 700,
		},
		h4: {
			fontSize: 20,
			fontWeight: 700,
		},
		h5: {
			fontSize: 16,
			fontWeight: 700,
		},
		subtitle1: {
			fontSize: 16,
			fontWeight: 'bold',
			textTransform: 'uppercase',
			letterSpacing: 1,
		},
	},
	// spacing: {

	// },
	// breakpoints: {

	// },
	// zIndex: {

	// },
	// transitions: {

	// },
})

const components = {
	MuiCssBaseline: {
		styleOverrides: {
			html: {
				backgroundColor: ORANGE,
				scrollBehavior: 'smooth',
				overflowY: 'hidden',
				overflowX: 'hidden',
			},
			body: {
				color: LIGHT,
				backgroundColor: ORANGE,
				overflowY: 'hidden',
				overflowX: 'hidden',
				'#__next': {
					height: '100%',
				},
				'.fullscreen': {
					height: '100%',
					'&:fullscreen::backdrop': {
						background: 'transparent',
					},
				},
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: ({ ownerState }) => ({
				height: theme.spacing(4),
				padding: theme.spacing(1, 1),
				textTransform: 'unset',
				lineHeight: 1,
				'&.Mui-disabled': {
					color: theme.palette[ownerState.color].main,
					opacity: 0.25,
				},
			}),
			outlined: {
				borderWidth: 2,
				borderColor: theme.palette.primary.main,
				'&:hover, &:focus': {
					borderWidth: 2,
				},
			},
			contained: {
				boxShadow: 'none !important',
				'&:hover, &:focus': {},
			},
		},
	},
	MuiSelect: {
		styleOverrides: {
			root: {
				// padding: theme.spacing(2, 1),
				color: theme.palette.primary.main,
				'& .MuiInputBase-input': {
					padding: theme.spacing(0, 1),
					minHeight: 'unset',
					lineHeight: 1,
				},
				'& .MuiOutlinedInput-notchedOutline': {
					borderWidth: 2,
					borderColor: `${theme.palette.primary.main} !important`,
				},
				'& .Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: `${theme.palette.primary.main} !important`,
				},
			},
			select: {
				height: theme.spacing(4),
				boxSizing: 'border-box',
				fontSize: 14,
				fontWeight: 500,
			},
			icon: {
				color: 'inherit',
				fill: 'currentColor',
			},
		},
		defaultProps: {},
	},
	MuiTooltip: {
		styleOverrides: {
			root: {},
			popper: {
				pointerEvents: 'none',
				'&[data-popper-placement*="bottom"] .MuiTooltip-arrow': {
					marginTop: -25 * 0.71,
				},
			},
			tooltip: {
				maxWidth: 400,
				padding: theme.spacing(1, 1.5),
				borderRadius: 15,
				backgroundColor: alpha(theme.palette.secondary.main, 0.75),
			},
			arrow: {
				width: 25,
				height: 25 * 0.71,
				borderColor: alpha(theme.palette.secondary.main, 0.75),
				'&::before': {
					backgroundColor: alpha(theme.palette.secondary.main, 0.75),
				},
			},
		},
	},
	MuiTypography: {
		defaultProps: {
			component: 'span',
		},
	},
	MuiStepper: {
		styleOverrides: {
			root: {
				padding: 0,
				flexGrow: 1,
				justifyContent: 'space-around',
			},
		},
	},
	MuiStepButton: {
		styleOverrides: {
			root: {
				// padding: theme.spacing(1),
				padding: 0,
				margin: 0,
			},
		},
	},
	MuiStepLabel: {
		styleOverrides: {
			iconContainer: {
				padding: 0,
			},
		},
	},
	MuiMobileStepper: {
		styleOverrides: {
			root: {
				padding: 0,
				flexGrow: 1,
				backgroundColor: alpha(theme.palette.secondary.main, 0.15),
			},
			dots: {
				flexGrow: 1,
				justifyContent: 'space-around',
			},
		},
	},
}

export default createTheme(theme, { components })
