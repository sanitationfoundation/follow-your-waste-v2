import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const HeaderFollowBackButton = ({ ...props }) => {
	return (
		<Link href='/follow'>
			<IconButton
				color='primary'
				variant='outlined'
				aria-label='Select another stream'
			>
				<ArrowBackIcon />
			</IconButton>
		</Link>
	)
}

export default HeaderFollowBackButton
