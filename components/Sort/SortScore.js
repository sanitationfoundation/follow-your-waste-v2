import { useEffect, useCallback, useMemo, usePrevious, useRef, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import AnimatedNumbers from 'react-animated-numbers'

import useStore from 'hooks'
import { getText, getItems } from 'selectors'

const SortScore = ({ ...props }) => {
	const theme = useTheme()
	const { locale, score, sorted } = useStore()
	const [prevScore, setPrevScore] = useState({})
	const [enlargeScore, setEnlargeScore] = useState(null)
	const items = getItems()
	// const isSorted = useCallback(slug => sorted.includes(slug), [sorted])

	// const prevScore = useMemo(() => {
	// 	const { current } = scoreRef
	// 	scoreRef.current = score
	// 	return current
	// }, [score])

	useEffect(() => {
		const updatedKey = Object.keys(score)
			.find(key => score[key] !== prevScore[key])
		setEnlargeScore(updatedKey)
		setPrevScore(score)
	}, [score])

	useEffect(() => {
		setTimeout(() =>
			setEnlargeScore(null)
		, 200)
	}, [enlargeScore])

	const getPoints = useCallback(key => score[key], [score])

	return (
		<Stack
			alignContent='center'
			justifyContent='center'
			sx={{
				width: '100%',
				height: '100%',
				position: 'absolute',
				left: 0,
				top: 0,
				zIndex: 30,
				pointerEvents: 'none',
			}}
		>
			<Stack
				direction='row'
				justifyContent='center'
				flexWrap='wrap'
				// spacing={1}
				maxWidth={175}
				mx='auto'
				>
				{/*{Object.keys(score).map((key, i) => (
					<Box
						key={i}
						width={100}
						textAlign='center'
						sx={{
							pointerEvents: 'all',
							'& .MuiTypography-root': {
								transition: theme.transitions.create(['transform'], { duration: 75 }),
								// transformOrigin: 'bottom center'
							}
						}}
					>
						<Typography
							fontSize={70}
							lineHeight={1}
							color='primary.main'
							sx={{
								transform: `scale(${key === enlargeScore ? 1.25 : 1})`
							}}>
							{String(score[key]).padStart(2, '0')}
						</Typography>
						<Typography
							variant='h5'
							color='primary.main'
							mt={1}>
							{getText(locale, 'system', ['score',key].join('_'))}
						</Typography>
					</Box>
				))}*/}
				{items.map((key, i) =>
					<Avatar
						key={i}
						sx={{
							m: .5,
							width: 20,
							height: 20,
							color: 'primary.contrastText',
							bgcolor: 'primary.main',
							fontSize: 11,
							pointerEvents: 'all',
							opacity: 0.5,
							transition: theme.transitions.create(['opacity'], { duration: 75 }),
						}}
						style={i + 1 <= sorted.length ? { opacity: 1 } : null}
					>{i + 1}</Avatar>
				)}
			</Stack>
		</Stack>
	)
}

export default SortScore
