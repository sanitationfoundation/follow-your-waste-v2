import { useEffect, useMemo } from 'react'

import IconButton from '@mui/material/IconButton'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import useStore from 'hooks'

const HeaderFullScreen = ({ onClick, ...props }) => {
	const { fullScreen } = useStore()

	return (
		<IconButton
			color='primary'
			// size='large'
			aria-label='Toggle full screen'
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
	)
}

export default HeaderFullScreen
