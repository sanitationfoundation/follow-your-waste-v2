import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Fade from '@mui/material/Fade'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'

const FollowFact = ({ fact, color, open, current, onClick, ...props }) => {
	const theme = useTheme()
	const tabSize = 50

	return (
		<Box
			sx={{
				p: 2,
				pl: 3,
				ml: 'auto !important',
				visibility: 'visible !important',
				position: 'relative',
				// transform: `translateX(-50%)`,
				// borderTopLeftRadius: 30,
				color: 'primary.main',
				// backgroundColor: alpha(theme.palette.secondary.main, 0.75),
				// backgroundColor: alpha(theme.palette[color].main, 0.75),
				backgroundColor: theme.palette[color].main,
				borderBottomLeftRadius: 30,
				borderBottomLeftRadius: 30,
				borderColor: 'primary.main',
				borderWidth: 3,
				// borderLeftWidth: 0,
				borderRightWidth: 0,
				borderStyle: 'solid',
				transition: theme => theme.transitions.create('transform'),
			}}
			style={{
				transform: open ? '' : `translateX(100%)`,
			}}
			onClick={onClick}
		>
			<Box
				sx={{
					width: tabSize,
					height: tabSize,
					position: 'absolute',
					top: -3,
					right: '100%',
					transform: `translateX(-3px)`,
					color: 'primary.main',
					bgcolor: color ? `${color}.main` : '',
					// backgroundColor: alpha(theme.palette.secondary.main, 0.75),
					borderTopLeftRadius: 30,
					borderBottomLeftRadius: 30,
					borderColor: 'primary.main',
					borderWidth: 3,
					borderRightWidth: 0,
					borderStyle: 'solid',
					cursor: 'pointer',
				}}
			>
				<CloseIcon
					sx={{
						width: '100%',
						height: '100%',
						mt: '-1.5px',
						mr: '-6px',
						ml: 0,
						transform: `rotate(${open ? 0 : 1485}deg)`,
						transition: theme => theme.transitions.create('transform'),
					}}
				/>
			</Box>
			<Box maxWidth={500} minHeight={tabSize + 25}>
				<Typography variant='body2' color='primary.main'>
					{fact}
				</Typography>
			</Box>
		</Box>
	)
}

export default FollowFact
