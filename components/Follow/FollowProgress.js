import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import StepLabel from '@mui/material/StepLabel'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import CircleIcon from '@mui/icons-material/Circle'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import useStore from 'hooks'
import { getText } from 'selectors'
// import FollowScene from './FollowScene'

const FollowProgress = ({ stream, scenes, ...props }) => {
	const theme = useTheme()
	const { locale, currentScene, nextScene, prevScene, setCurrentScene } =
		useStore()

	const handleStepClick = (e, index) => {
		setCurrentScene(index)
	}

	return (
		<Stack
			direction="row"
			sx={{
				width: '100%',
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 30,
				backgroundColor: alpha(theme.palette.secondary.main, 0.15),
			}}
		>
			<Button
				size="small"
				onClick={prevScene}
				disabled={currentScene === 0}
				aria-label="Back"
				sx={{
					borderRadius: 0,
				}}
			>
				<KeyboardArrowLeft />
			</Button>
			<Stepper
				variant="dots"
				color="primary"
				steps={scenes.length}
				connector={null}
				position="static"
				activeStep={currentScene}
				sx={{
					width: '100%',
				}}
			>
				{scenes.map((scene, i) => (
					<Step key={i} disabled={false}>
						<Tooltip
							arrow
							title={getText(locale, stream, scene.slug, 'label')}
						>
							<Box>
								<StepButton
									icon={<CircleIcon fontSize="xsmall" />}
									sx={{
										opacity: 0.25,
									}}
									style={
										currentScene === i
											? {
													opacity: 1,
											  }
											: {}
									}
									data-index={i}
									onClick={(e) => handleStepClick(e, i)}
								/>
							</Box>
						</Tooltip>
					</Step>
				))}
			</Stepper>
			<Button
				size="small"
				onClick={nextScene}
				disabled={currentScene === scenes.length - 1}
				aria-label="Next"
				sx={{
					borderRadius: 0,
				}}
			>
				<KeyboardArrowRight />
			</Button>
		</Stack>
	)
}

export default FollowProgress
