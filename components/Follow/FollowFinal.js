import {
	Fragment,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import Image from 'next/image'
import { alpha, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch'

import useStore from 'hooks'
import { getText, getStreamColor } from 'selectors'
import { Final } from 'common/Final'

const FollowEnd = ({ stream, current, ...props }) => {
	const { locale, currentScene } = useStore()
	return (
		<Final
			open={true}
			section='follow'
			sx={{
				maxWidth: '100vw',
				maxHeight: '100vh',
				flex: '0 0 100vw',
				position: 'relative',
				zIndex: 50,
			}}
			style={currentScene === 0 ? {
				opacity: 0
			} : null}
		/>
	)
}

export default FollowEnd