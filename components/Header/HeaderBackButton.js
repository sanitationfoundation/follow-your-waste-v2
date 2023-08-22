import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import useStore from 'hooks'
import { getText } from 'selectors'

const HeaderBackButton = ({ ...props }) => {
	const { locale } = useStore()
	const tooltipText = getText(locale, 'system', 'back')
	return (
		<Link href='/'>
			<Tooltip
				arrow
				placement='bottom'
				title={tooltipText}
			>
				<IconButton
					color='primary'
					variant='outlined'
					aria-label={tooltipText}
				>
					<ArrowBackIcon />
				</IconButton>
			</Tooltip>
		</Link>
	)
}

export default HeaderBackButton
