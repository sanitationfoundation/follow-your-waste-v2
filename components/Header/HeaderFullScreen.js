import { useEffect, useMemo } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'

import useStore from 'hooks'
import { getText } from 'selectors'

const HeaderFullScreen = ({ onClick, ...props }) => {
	const { locale, fullScreen } = useStore()
	const tooltipText = getText(locale, 'system', fullScreen ? 'full_exit' : 'full_enter')
	return (
		<Tooltip
			arrow
			placement='bottom'
			title={tooltipText}
		>
			<IconButton
				color='primary'
				aria-label={tooltipText}
				aria-pressed={fullScreen}
				onClick={onClick}
				{...props}
			>
				{fullScreen ? (
					<FullscreenExitIcon fontSize='large' />
				) : (
					<FullscreenIcon fontSize='large' />
				)}
			</IconButton>
		</Tooltip>
	)
}

export default HeaderFullScreen
