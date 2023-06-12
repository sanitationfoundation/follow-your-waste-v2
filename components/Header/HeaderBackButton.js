import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const HeaderBackButton = ({ ...props }) => {
	return (
		<Link href='/'>
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

export default HeaderBackButton
