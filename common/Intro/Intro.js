import { useState } from 'react'
import { alpha, useTheme } from '@mui/material/styles'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import ClickAwayListener from '@mui/base/ClickAwayListener'

import useStore from 'hooks'
import { getText } from 'selectors'
import { Chyron } from 'common/Chyron'
import { Voices } from 'components/Voices'

const Intro = ({ section, children, ...props }) => {
	const theme = useTheme()
	const { locale } = useStore()
	const [isChyronOpen, setIsChyronOpen] = useState(true)
	const captionSlug = [section, 'intro'].join('_')
	const introCaption = getText(locale, 'system', captionSlug)

	const handleChyronClose = e => {
		setIsChyronOpen(false)
	}
	
	return (
		<Modal
			open={isChyronOpen}
			onClose={handleChyronClose}
			onBackdropClick={handleChyronClose}
			closeAfterTransition={true}
			sx={{
				display: 'flex',
				justifyContent: 'center'
			}}
			slotProps={{
				backdrop: {
					sx: {
						bgcolor: alpha(theme.palette.orange.main, 0.5),
					}
				}
			}}
		>
			<>
				<Chyron
					open={isChyronOpen}
					float={false}
					caption={introCaption}
					color='yellow'
					imgSrc={`/images/workers/chief.png`}
					onClose={handleChyronClose}
					sx={{
						my: 'auto'
					}}
				/>
				<Voices
					type={section}
					slugs={['intro']}
					curr='intro'
				/>
			</>
		</Modal>
	)
}

export default Intro
