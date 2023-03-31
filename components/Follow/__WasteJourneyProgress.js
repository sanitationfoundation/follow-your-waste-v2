import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MobileStepper from '@mui/material/MobileStepper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import useStore from 'hooks'
import { getText } from 'selectors'
// import WasteJourneyScene from './WasteJourneyScene'

const WasteJourneyProgress = ({ scenes, ...props }) => {
	const { currentScene, nextScene, prevScene } = useStore()
	return (
		<MobileStepper
			variant='dots'
			color='primary'
			steps={scenes.length}
			position='static'
			activeStep={currentScene}
			sx={{
				width: '100%',
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 30,
				// bgcolor: 'transparent'
			}}
			nextButton={
				<Button
					size='small'
					onClick={nextScene}
					disabled={currentScene === scenes.length - 1}
					aria-label='Next'>
					<KeyboardArrowRight />
				</Button>
			}
			backButton={
				<Button
					size='small'
					onClick={prevScene}
					disabled={currentScene === 0}
					aria-label='Back'>
					<KeyboardArrowLeft />
				</Button>
			}
		/>
	)
}

export default WasteJourneyProgress