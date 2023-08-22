import { useEffect, useMemo } from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

import useStore from 'hooks'
import { getText } from 'selectors'

const HeaderVolume = () => {
	const { locale, mute, setMute } = useStore()

	const tooltipText = getText(locale, 'system', mute ? 'audio_unmute' : 'audio_mute')

	const onClick = () => {
		setMute(!mute)
	}

	return (
		<Tooltip
			arrow
			placement='bottom'
			title={tooltipText}
		>
			<IconButton
				color='primary'
				aria-label={tooltipText}
				aria-pressed={mute}
				onClick={onClick}
			>
				{mute ? (
					<VolumeOffIcon fontSize='large' />
				) : (
					<VolumeUpIcon fontSize='large' />
				)}
			</IconButton>
		</Tooltip>
	)
}

export default HeaderVolume
