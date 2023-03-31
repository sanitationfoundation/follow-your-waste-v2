import Link from 'next/link'
import Button from '@mui/material/Button'

const HeaderGameButton = () => {
	return (
		<Link
			href='/sort'>
			<Button
				color='primary'
				variant='outlined'
				aria-label='Switch to sorting game'>
				Sorting Game
			</Button>
		</Link>
	)
}

export default HeaderGameButton