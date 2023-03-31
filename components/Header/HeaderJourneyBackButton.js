import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const HeaderJourneyBackButton = ({ ...props }) => {
	return (
		<Link
			href='/journey'>
			<IconButton
				color='primary'
				variant='outlined'
				aria-label='Select another stream'>
				<ArrowBackIcon />				
			</IconButton>
		</Link>
	)
}

export default HeaderJourneyBackButton