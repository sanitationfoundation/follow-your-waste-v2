import { Fragment, useMemo } from 'react'
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
	const theme = useTheme()
	const { locale, score, sorted, resetSorted, resetScore } =
		useStore()
	const streams = getStreams()
	const items = getItems()

	const isEnd = useMemo(
		() => sorted.length === items.length,
		// sorted.length === 1
		[sorted, items],
	)

	return (
		<Fade in={isEnd} timeout={700}>
			<Box
				// bgcolor='orange.main'
				sx={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					left: 0,
					top: 0,
					zIndex: 50,
					bgcolor: 'orange.main',
				}}
			>
				<Final section='sort' sx={{}} />
			</Box>
		</Fade>
	)
}

export default SortFinal
