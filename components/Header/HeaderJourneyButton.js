import Link from 'next/link'
import Button from '@mui/material/Button'

const HeaderJourneyButton = () => {
	return (
		<Link
			href='/journey'>
			<Button
				color='primary'
				variant='outlined'
				aria-label='Switch to waste journeys'>
				Waste Journey
			</Button>
		</Link>
	)
}

export default HeaderJourneyButton