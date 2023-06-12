import { useMemo } from 'react'
// import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useStore from 'hooks'
import { getText, getStreams, getItems } from 'selectors'
import { Final } from 'common/Final'
import FollowSelect from 'components/Follow/FollowSelect'

const SortFinal = ({ ...props }) => {
	// const router = useRouter()
	const theme = useTheme()
	const { locale, score, sorted, resetSorted, resetScore, resetAllSort } = useStore()
	const streams = getStreams()
	const items = getItems()

	const handleReset = () => {
		resetAllSort()
	}

	const isEnd = useMemo(() =>
		sorted.length === items.length
		// sorted.length === 1
	, [sorted, items])

	return (
		<Fade
			in={isEnd}
			timeout={700}
		>
			<Stack
				alignItems='center'
				sx={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					left: 0,
					top: 0,
					zIndex: 40,
					bgcolor: 'orange.main'
				}}
			>
				<Final
					section='sort'
				>
					<FollowSelect small={true} />
					<Button
						variant='contained'
						color='green'
						onClick={handleReset}
					>
						Play again
					</Button>
				</Final>
			</Stack>
		</Fade>
	)

	// return (
	// 	<Dialog
	// 		open={isEnd}
	// 		maxWidth='lg'
	// 		sx={{

	// 		}}
	// 		PaperProps={{
	// 			sx: {
	// 				bgcolor: 'orange.main'
	// 			}
	// 		}}
	// 		onClose={handleReset}
	// 		onBackdropClick={handleReset}
	// 		{...props}
	// 	>
	// 		<DialogContent sx={{ p: 4 }}>
	// 			<Stack alignItem='center'>
	// 				<Typography
	// 					component='h2'
	// 					variant='h1'
	// 					align='center'
	// 					color='primary'
	// 					mb={2}
	// 				>
	// 					Nice work!
	// 				</Typography>
	// 				<Typography
	// 					variant='h4'
	// 					component='div'
	// 					align='center'
	// 					color='primary'
	// 					mb={2}
	// 					sx={{ '& p': {
	// 						my: 0,
	// 						mx: 'auto',
	// 						maxWidth: 600
	// 					} }}
	// 				>
	// 					<p>You successfully sorted the items into the correct bins.</p>
	// 					<p>Click any item to learn where it goes after it’s thrown away.</p>
	// 				</Typography>
	// 				<FollowSelect />
	// 			</Stack>
	// 			<Stack mt={3} alignItems='center'>
	// 				<Button
	// 					variant='contained'
	// 					onClick={handleReset}
	// 				>
	// 					Or play again
	// 				</Button>
	// 			</Stack>
	// 		</DialogContent>
	// 	</Dialog>
	// )
}

export default SortFinal
