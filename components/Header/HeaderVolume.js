import { useEffect, useMemo } from 'react'

import IconButton from '@mui/material/IconButton'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import useStore from 'hooks'

const HeaderVolume = () => {
	const { mute, setMute } = useStore()

	const onClick = () => {
		setMute(!mute)
	}

	return (
		<IconButton
			color='primary'
			// size='large'
			aria-label='Toggle volume on/off'
			aria-pressed={mute}
			onClick={onClick}
		>
			{mute ? (
				<VolumeOffIcon fontSize='large' />
			) : (
				<VolumeUpIcon fontSize='large' />
			)}
		</IconButton>
	)
}

export default HeaderVolume
