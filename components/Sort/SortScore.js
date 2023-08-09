import {
	useEffect,
	useCallback,
	useMemo,
	usePrevious,
	useRef,
	useState,
} from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import AnimatedNumbers from 'react-animated-numbers'

import useStore from 'hooks'
import { getText, getItems } from 'selectors'

const SortScore = ({ sx, ...props }) => {
	const theme = useTheme()
	const { locale, score, sorted, thumbsUp } = useStore()
	const items = getItems()

	return (
		<Stack
			direction='row'
			alignItems='center'
			spacing={1}
			sx={{
				px: 2,
				py: 1,
				mr: 'auto',
				textAlign: 'center',
				borderRadius: 10,
				borderWidth: 2,
				borderStyle: 'solid',
				backgroundColor: alpha(theme.palette.secondary.main, 0.75),
				color: 'primary.main',
				'& img': {
					width: 20,
					height: 'auto',
				},
				'& .MuiTypography-root': {
					display: 'inline-block',
				},
				...sx,
			}}
			{...props}
		>
			<Image width={500} height={514} src='/images/glove.png' alt='' />
			<Typography fontSize={16}>
				<Typography
					sx={{
						display: {
							xs: 'none',
							md: 'inline-block',
						},
					}}
				>
					{getText(locale, 'system', 'sort_score')}:&nbsp;
				</Typography>
				<Typography
					component='span'
					fontWeight={700}
					sx={{
						transform: `scale(${thumbsUp ? 1.25 : 1})`,
						transition: theme.transitions.create(['transform'], {
							duration: 75,
						}),
					}}
				>
					{score}
				</Typography>
				/{items.length}
			</Typography>
		</Stack>
	)
}

export default SortScore
